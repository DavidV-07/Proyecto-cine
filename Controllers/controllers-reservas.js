const {validacionPuestoDisponible, obtenerTodo, obtenerReservaPorId, crearReserva, actualizarReserva, actualizarPrecioReserva,  eliminarReserva} = require(`../Models/models-reservas`)
const {crearDetallesReserva, eliminarDetallesReservaPorIdReserva} = require(`../Models/module-detalles-reservas`)
const {obtenerPrecioAsiento} = require(`../Models/models-funciones`)
const pool = require(`../db`)

const getAll = async (req, res) => {
    const result = await obtenerTodo()

    res.json(result)
}

const getForId = async (req, res) => {
    const idReserva = req.body.idReserva

    try {
        if(!idReserva) {
            throw(`campo vacio`)
        }

        const result = await obtenerReservaPorId(idReserva)

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

const create = async (req, res) => {
    const idUsuario = req.body.idUsuario
    const idFuncion = req.body.idFuncion
    const idAsiento = req.body.idAsiento

    const client = await pool.connect()

    try {

        await client.query('BEGIN')

        //condicional para verificar campos vacios
        if(!idUsuario || !idFuncion) {
            throw new Error(`campo vacio`)
        //condicional para verificacion del envio de un array y que no este vacio
        } else if (!Array.isArray(idAsiento) || idAsiento.length === 0) {
            throw new Error(`tipo de dato no valido!`)
        }

        //ciclo de validacion de cada puesto disponible
        for (let i = 0; i < idAsiento.length; i++) {
            const validacion = await validacionPuestoDisponible(client, idAsiento[i], idFuncion)

            if(!validacion) {
                throw new Error (`puesto ${idAsiento[i]} ocupado`)
            }
        }

        let totalReserva = 0;

        const idReserva = await crearReserva(client, idUsuario, idFuncion)
        const precioAsiento = await obtenerPrecioAsiento(client, idFuncion)
        const precioUnitario = Number(precioAsiento[0].precio_asiento)

        //ciclo de reserva de cada asiento
        for (let i = 0; i < idAsiento.length; i++) {

            const validacion = await crearDetallesReserva(client, idReserva, idAsiento[i], precioUnitario)

            // Convertir explícitamente a número para evitar concatenación de strings
            totalReserva += precioUnitario;
            
        }

        await actualizarPrecioReserva(client, idReserva, totalReserva)

        await client.query('COMMIT')

        res.json(`reserva creada exitosamente!`)

    } catch (error) {
        await client.query('ROLLBACK')
        res.status(400).json({ error: error.message });
    } finally {
        client.release()
    }
    
}

const update = async (req, res) => {
    const idReserva = req.body.idReserva
    const idUsuario = req.body.idUsuario
    const idFuncion = req.body.idFuncion
    const totalPago = req.body.totalPago

    try {
        if(!idReserva || !idUsuario || !idFuncion || !totalPago) {
            throw(`campo vacio`)
        }

        const result = await actualizarReserva(idReserva, idUsuario, idFuncion, totalPago)

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
    
}

const deleteReserva = async (req, res) => {
    const idReserva = req.body.idReserva
    let client;

    if (!idReserva) {
        return res.status(400).json({ error: 'campo vacio' });
    }

    try {
        client = await pool.connect()

        await client.query(`BEGIN`)

        await eliminarDetallesReservaPorIdReserva (client, idReserva)
        await eliminarReserva(client, idReserva)

        await client.query('COMMIT')
        res.json(`Reserva ${idReserva} eliminada con Exito!`)
    } catch (error) {
        if (client) {
            await client.query(`ROLLBACK`)
        }
        res.status(400).json({ error: error.message });
    } finally {
        if (client) {
            client.release()
        }
    }
}

module.exports = {getAll, getForId, create, update, deleteReserva}