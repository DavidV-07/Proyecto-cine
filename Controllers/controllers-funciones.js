const {obtenerTodo, obtenerFuncionPorId, crearFuncion, actualizarFuncion, eliminarFuncion} = require(`../Models/models-funciones`)

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
        const result = await obtenerFuncionPorId(id);

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

const create = async (req, res) => {
    const idSala = req.body.idSala
    const idPelicula = req.body.idPelicula
    const fechaEmision = req.body.fechaEmision

    try {

        const result = await crearFuncion(idSala, idPelicula, fechaEmision);

        res.json(result)
    } catch (error) {
        res.status(400).json({
            mensaje : "Error interno del servidor",
            detalles : error.detalles
        })
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const idSala = req.body.idSala
    const idPelicula = req.body.idPelicula
    const fechaEmision = req.body.fechaEmision

    if(!id) {
        return res.status(400).json({mensaje : `Coloque un ID que actualizar`})
    }

    try {

        const result = await actualizarFuncion(id, idSala, idPelicula, fechaEmision);

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

const deletefuncion = async (req, res) => {
    const {id} = req.params;

    if(!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {

        const result = await eliminarFuncion(id);

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

module.exports = {getAll, getForId, create, update, deletefuncion}