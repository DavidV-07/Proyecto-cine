const {getall, getForId, create, update, deleteClasificacionEdad} = require(`../Models/models-clasificacion-edad`)

const obtenerTodo = async (req, res) => {
    const result = await getall();
    res.json(result)
}

const obtenerPorId = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        const result = await getForId(id);

        if (!result || result.rows == 0) {
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

const crearClasificacionEdad = async (req, res) => {
    const nombreClasificacionEdad = req.body.nombreClasificacionEdad;

    try {
        res.json(await create(nombreClasificacionEdad))
    } catch (error) {
        res.status(400).json({
            mensaje : "Error interno del servidor",
            detalles : error.mensaje
        })
    }
}

const actualizarClasificacion = async (req, res) => {
    const {id} = req.params;
    const nombreClasificacionEdad = req.body.nombreClasificacionEdad

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {

        const result = await update(nombreClasificacionEdad, id);

        if (!result || result.lenght == 0) {
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

const deleteClasificacion = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {

        const result = await deleteClasificacionEdad(id);

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

module.exports = {deleteClasificacion, obtenerPorId, crearClasificacionEdad, obtenerTodo, actualizarClasificacion}