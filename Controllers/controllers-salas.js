const {obtenerTodo, obtenerPorId, crearSala, actualizarSala, eliminarSala} = require(`../Models/models-salas`)

const getAll = async (req, res) => {
    const result = await obtenerTodo();

    res.json(result)
}

const getForId = async (req, res) => {
    const idSala = req.body.idSala

    try {
        if (!idSala) {
            throw (`campo vacio`)
        }

        const result = await obtenerPorId(idSala)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
    
}

const create = async (req, res) => {
    const tipoSala = req.body.tipoSala
    const capacidad = req.body.capacidad

    try {

        if (!tipoSala || !capacidad) {
            throw (`campo vacio`)
        }

        const result = await crearSala(tipoSala, capacidad)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
}

const update = async (req, res) => {
    const idSala = req.body.idSala
    const tipoSala = req.body.tipoSala
    const capacidad = req.body.capacidad

    try {
        if (!idSala || !tipoSala || !capacidad) {
            throw (`campo vacio`)
        }

        const result = await actualizarSala(tipoSala, capacidad, idSala)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
}

const deleteSala = async (req, res) => {
    const idSala = req.body.idSala

    try {
        if (!idSala) {
            throw (`campo vacio`)
        }

        const result = await eliminarSala(idSala)

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
}

module.exports = {getAll, getForId,  create, update, deleteSala}