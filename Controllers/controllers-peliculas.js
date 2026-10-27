//controller

const {obtenerTodo, obtenerPorId, crearPelicula, actualizarPelicula, eliminarPelicula} = require(`../Models/models-peliculas`);

const getall = async (req, res) => {
    res.json(await obtenerTodo())
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
    const nombrePelicula = req.body.nombrePelicula;
    const categoria = req.body.categoria;
    const clasificacionEdad = req.body.clasificacionEdad;
    const duracion = req.body.duracion;

    try {
        const result = await crearPelicula(nombrePelicula, categoria, clasificacionEdad, duracion);

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
    const nombrePelicula = req.body.nombrePelicula
    const categoria = req.body.categoria
    const clasificacionEdad = req.body.clasificacionEdad
    const duracion = req.body.duracion

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }
    try {

        const result = await actualizarPelicula(id, nombrePelicula, categoria, clasificacionEdad, duracion);

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

const deletePelicula = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {

        const result = await eliminarPelicula(id);

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

module.exports = {getall, getForId, create, update, deletePelicula}