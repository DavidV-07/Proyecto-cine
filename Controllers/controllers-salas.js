const {obtenerTodo, obtenerPorId, crearSala, actualizarSala, eliminarSala} = require(`../Models/models-salas`)

const getAll = async (req, res) => {
    const result = await obtenerTodo();

    res.json(result)
}

const getForId = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {

        const result = await obtenerPorId(id)

        if (!result || result.length == 0) {
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
    const tipoSala = req.body.tipoSala
    const capacidad = req.body.capacidad

    try {

        const result = await crearSala(tipoSala, capacidad)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const tipoSala = req.body.tipoSala
    const capacidad = req.body.capacidad

    if (!id) {
        return res.status(400).json({mensaje : `el ID es requerido`})
    }

    try {

        const result = await actualizarSala(tipoSala, capacidad, id)

        if (!result || result.length == 0) {
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

const deleteSala = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        const result = await eliminarSala(id)

        if (!result || result.length == 0) {
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

module.exports = {getAll, getForId,  create, update, deleteSala}