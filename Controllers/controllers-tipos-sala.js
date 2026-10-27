const {obtenerPorId, eliminarTipoSala, actualizarTipoSala, crearTipoSala, mostrarSalas} = require(`../Models/module-tipos-sala`)

const getall = async (req, res) => {
    const result = await mostrarSalas();
    res.json(result)
}

const getForId = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    } 

    try {
        const result = await obtenerPorId(id);

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
    const nombreTipoSala = req.body.nombreTipoSala;
    const precioAsiento = req.body.precioAsiento;

    try {

        const result = await crearTipoSala(nombreTipoSala, precioAsiento);
        res.json(result)
    
    } catch(err) {
        res.send(`error!!\n\n${err}`)
    }
}

const update = async (req, res) => {
    const nombre_tipos_sala = req.body.nombreTipoSala
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        const result = await actualizarTipoSala(nombre_tipos_sala, id);

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

const eliminarSala = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        const result = await eliminarTipoSala(id);

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

module.exports = {getall, getForId, create, update, eliminarSala}