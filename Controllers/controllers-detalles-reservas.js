const {obtenerTodo, obtenerDetallesPorId, crearDetallesReserva, actualizarDetallesReserva, eliminarDetallesReserva} = require(`../Models/module-detalles-reservas`)

const getAll = async (req, res) => {
    const result = await obtenerTodo()

    res.json(result)
}

const getForId = async (req, res) => {
    const idDetalles = req.body.idDetalles

    try {
        if(!idDetalles) {
            throw(`campo vacio!`)
        }
        const result = await obtenerDetallesPorId(idDetalles)

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error!\n\n${error}`)
    }
}

const create = async (req, res) => {
    const idReserva = req.body.idReserva
    const idAsiento = req.body.idAsiento
    const precioAplicado = req.body.precioAplicado

    try {
        if(!idReserva || !idAsiento || !precioAplicado) {
            throw(`campo vacio!`)
        }

        const result = await crearDetallesReserva(idReserva, idAsiento, precioAplicado)
        res.json(result)
    } catch (error) {
        res.status(400).send(`Error!\n\n${error}`)
    }
}

const update = async (req, res) => {
    const idDetalles = req.body.idDetalles
    const idReserva = req.body.idReserva
    const idAsiento = req.body.idAsiento
    const precioAplicado = req.body.precioAplicado

    try {
        if(!idDetalles || !idReserva || !idAsiento || !precioAplicado) {
            throw(`campo vacio!`)
        }

        const result = await actualizarDetallesReserva(idDetalles, idReserva, idAsiento, precioAplicado)
        res.json(result)
    } catch (error) {
        res.status(400).send(`Error!\n\n${error}`)
    }
}

const deleteDetalles = async (req, res) => {

    const idDetalles = req.body.idDetalles

    try {
        if(!idDetalles) {
            throw(`campo vacio!`)
        }
        const result = await eliminarDetallesReserva(idDetalles)

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error!\n\n${error}`)
    }
}

module.exports = {getAll, getForId, create, update, deleteDetalles}