//controller

const {obtenerTodo, obtenerPorId, crearUsuario, actualizarUsuario, eliminarUsuario} = require(`../Models/models-usuarios`)

const getAll = async (req, res) => {
    const result = await obtenerTodo()

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
    })
    }
}

const create = async (req, res) => {
    const nombreUsuario = req.body.nombreUsuario
    const apellidoUsuario = req.body.apellidoUsuario
    const cedulaUsuario = req.body.cedulaUsuario
    const emailUsuario = req.body.emailUsuario
    const tlfUsuario = req.body.tlfUsuario

    try {

        const result = await crearUsuario(nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, tlfUsuario)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error\n\n${error}`)
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const nombreUsuario = req.body.nombreUsuario
    const apellidoUsuario = req.body.apellidoUsuario
    const cedulaUsuario = req.body.cedulaUsuario
    const emailUsuario = req.body.emailUsuario
    const tlfUsuario = req.body.tlfUsuario

    if(!id) {
        return res.status(400).json({mensaje : `verifique que ningun campo este vacio`})
    }

    try {
        const result = await actualizarUsuario(id, nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, tlfUsuario)

        if (!result || result.length == 0) {
            return res.status(404).json({mensaje : `El ID ${id} no existe`})
        }

        res.json(result)
    } catch (error) {
        res.status(500).json({
            mensaje : "Error interno del servidor",
            detalles : error.message
        })
    }
}

const deleteUsuario = async (req, res) => {
    const {id} = req.params;

    if(!id) {
        return res.status(400).json({mensaje : `campo vacio, id requerido`})
    }

    try {
        const result = await eliminarUsuario(id)

        if (!result || result.length == 0) {
            return res.status(404).json({mensaje : `El ID ${id} no existe`})
        }

        res.json(result)
    } catch (error) {
        res.status(500).json({
            mensaje : "Error interno del servidor",
            detalles : error.message
    })
    }
}

module.exports = {getAll, getForId, create, update, deleteUsuario}