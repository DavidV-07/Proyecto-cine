//controller

const {obtenerTodo, obtenerPorId, crearUsuario, actualizarUsuario, eliminarUsuario} = require(`../Models/models-usuarios`)

const getAll = async (req, res) => {
    const result = await obtenerTodo()

    res.json(result)
}

const getForId = async (req, res) => {
    const idUsuario = req.body.idUsuario
    try {
        const result = await obtenerPorId(idUsuario)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error\n\n${error}`)
    }
}

const create = async (req, res) => {
    const nombreUsuario = req.body.nombreUsuario
    const apellidoUsuario = req.body.apellidoUsuario
    const cedulaUsuario = req.body.cedulaUsuario
    const emailUsuario = req.body.emailUsuario
    const tlfUsuario = req.body.tlfUsuario

    try {

        if(!nombreUsuario || !apellidoUsuario || !cedulaUsuario || !emailUsuario || !tlfUsuario) {
            throw (`Campo vacio!`)
        }

        const result = await crearUsuario(nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, tlfUsuario)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error\n\n${error}`)
    }
}

const update = async (req, res) => {
    const idUsuario = req.body.idUsuario
    const nombreUsuario = req.body.nombreUsuario
    const apellidoUsuario = req.body.apellidoUsuario
    const cedulaUsuario = req.body.cedulaUsuario
    const emailUsuario = req.body.emailUsuario
    const tlfUsuario = req.body.tlfUsuario

    try {

        if(!idUsuario || !nombreUsuario || !apellidoUsuario || !cedulaUsuario || !emailUsuario || !tlfUsuario) {
            throw (`Campo vacio!`)
        }

        const result = await actualizarUsuario(idUsuario, nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, tlfUsuario)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error\n\n${error}`)
    }
}

const deleteUsuario = async (req, res) => {
    const idUsuario = req.body.idUsuario
    try {

        if(!idUsuario) {
            throw (`Campo vacio!`)
        }

        const result = await eliminarUsuario(idUsuario)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error\n\n${error}`)
    }
}

module.exports = {getAll, getForId, create, update, deleteUsuario}