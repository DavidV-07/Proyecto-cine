const {obtenerTodo, obtenerReservaPorId, crearReserva, actualizarReserva, eliminarReserva} = require(`../Models/models-reservas`)

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
    const totalPago = req.body.totalPago

    try {
        if(!idUsuario || !idFuncion || !totalPago) {
            throw(`campo vacio`)
        }

        const result = await crearReserva(idUsuario, idFuncion, totalPago)

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
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

    try {
        if(!idReserva) {
            throw(`campo vacio`)
        }

        const result = await eliminarReserva(idReserva)

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

module.exports = {getAll, getForId, create, update, deleteReserva}