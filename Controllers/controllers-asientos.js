const {obtenerTodo, obtenerPorId, crearAsiento, actualizarAsiento, eliminarAsiento} = require(`../Models/models-asientos`)

const getAll = async (req, res) => {

    const result = await obtenerTodo();

    res.json(result);
}

const getForId = async (req, res) => {
    const {id} = req.params;
    
    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        const result = await obtenerPorId(id);

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
    const codigoAsiento = req.body.codigoAsiento
    const idSala = req.body.idSala

    try {
        const result = await crearAsiento(codigoAsiento, idSala);

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
    const codigoAsiento = req.body.codigoAsiento
    const idSala = req.body.idSala

    if (!id) {
        return res.status(400).json({mensaje : `verificar que no haya un campo vacio`})
    }

    try {
        const result = await actualizarAsiento(id, codigoAsiento, idSala);

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

const deleteAsiento = async (req, res) =>{
    const {id} = req.params
    
    try {
        if (!id) {
            return res.status(400).json({mensaje : `campo vacio, id requerido`})
        }

        const result = await eliminarAsiento(id);

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

module.exports = {getAll, getForId, create, update, deleteAsiento}