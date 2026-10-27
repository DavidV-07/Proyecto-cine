const {obtenerTodo, obtenerDetallesPorId, crearDetallesReserva, actualizarDetallesReserva, eliminarDetallesReserva} = require(`../Models/module-detalles-reservas`)

const getAll = async (req, res) => {
    const result = await obtenerTodo()

    res.json(result)
}

const getForId = async (req, res) => {
    const {id} = req.params;

    if(!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        const result = await obtenerDetallesPorId(id)

        if(!result || result.rows == 0) {
            return res.status(404).json({mensaje : `El ID ${id} no existe`})
        }

        res.json(result)
    } catch (error) {
        res.status(500).json({
            mensaje : "Error interno del servidor",
            detalles : error.message
        });
    }
}

const create = async (req, res) => {
    const idReserva = req.body.idReserva
    const idAsiento = req.body.idAsiento
    const precioAplicado = req.body.precioAplicado

    try {
        const result = await crearDetallesReserva(idReserva, idAsiento, precioAplicado)
        
        res.json(result)
    } catch (error) {
        res.status(400).json({
            mensaje : "Error interno del servidor",
            detalles : error.mensaje
        })
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const idReserva = req.body.idReserva
    const idAsiento = req.body.idAsiento
    const precioAplicado = req.body.precioAplicado

    if(!id) {
        return res.status(400).json({mensaje : `campo ID necesario`})
    }

    try {

        const result = await actualizarDetallesReserva(id, idReserva, idAsiento, precioAplicado)
        
        if (!result || result.length === 0) {
            return res.status(404).json({mensaje : `El ID ${id} no existe`})
        }
        
        res.json(result)
    } catch (error) {
        res.status(500).json({
            mensaje : "Error interno del servidor",
            detalles : error.message
        });
    }
}

const deleteDetalles = async (req, res) => {

    const {id} = req.params;

    if(!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        const result = await eliminarDetallesReserva(id)

        if (!result || result.length === 0) {
            return res.status(404).json({mensaje : `El ID ${id} no existe`})
        }

        res.json(result)
    } catch (error) {
        res.status(500).json({
            mensaje : "Error interno del servidor",
            detalles : error.message
        });
    }
}

module.exports = {getAll, getForId, create, update, deleteDetalles}