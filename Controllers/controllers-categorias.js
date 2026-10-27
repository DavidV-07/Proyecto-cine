const { obtenerTodo, obtenerPorId, crear, actualizacion, eliminacion } = require('../Models/models-categorias')

const getall = async (req, res) =>{
    const result = await obtenerTodo()
    res.json(result)
}

const getForId = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {

        const result = await obtenerPorId(id);

        // Si la base de datos no devolvió ninguna fila
        if (!result || Object.keys(result).length === 0) {
            return res.status(404).json({mensaje : `El ID ${id} no existe`})
        }

        // Devolvemos la primera fila (el objeto del usuario)
        res.json(result);

    } catch (err) {
        // Este catch captura errores de conexión o sintaxis de SQL (ej. mandar letras donde va un entero)
        res.status(500).send(`Error interno del servidor:\n\n${err.message || err}`);
    }
};

const create = async (req, res) =>{
    const nuevaCategoria = req.body.nombreCategoria

    try {
        res.json(await crear(nuevaCategoria))
    } catch (error) {
        res.status(400).json({
            mensaje : "Error interno del servidor",
            detalles : error.mensaje
        })
    }
}

const update = async (req, res) =>{
    const nombreNuevo = req.body.nombreCategoria
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        
        const result = await actualizacion(nombreNuevo, id)

        if (!result || result.length === 0) {
            return res.status(404).json({mensaje : `El ID ${id} no existe`})
        }

        res.json(result)
    } catch(error) {
        res.status(500).json({
            mensaje : "Error interno del servidor",
            detalles : error.message
        });
    }
}

const deleteCategoria = async (req, res) =>{
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }
    
    try {

        const result = await eliminacion(id);

        if (!result || result.length === 0) {
            return res.status(404).json({mensaje : `El ID ${id} no existe`})
        }

        res.json(result)
    } catch(err) {
        res.status(500).json({
            mensaje : "Error interno del servidor",
            detalles : error.message
        });
    }
}

module.exports = { getall, getForId, create, update, deleteCategoria }