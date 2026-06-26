const {obtenerTodo, obtenerFuncionPorId, crearFuncion, actualizarFuncion, eliminarFuncion} = require(`../Models/models-funciones`)

const getAll = async (req, res) => {
    const result = await obtenerTodo();

    res.json(result)
    
}
const getForId = async (req, res) => {
    const idFuncion = req.body.idFuncion

    try {
        if(!idFuncion) {
            throw(`campo vacio`)
        }

        const result = await obtenerFuncionPorId(idFuncion);

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
}

const create = async (req, res) => {
    const idSala = req.body.idSala
    const idPelicula = req.body.idPelicula
    const fechaEmision = req.body.fechaEmision

    try {
        if(!idSala || !idPelicula || !fechaEmision) {
            throw(`campo vacio`)
        }

        const result = await crearFuncion(idSala, idPelicula, fechaEmision);

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
}

const update = async (req, res) => {
    const idFuncion = req.body.idFuncion
    const idSala = req.body.idSala
    const idPelicula = req.body.idPelicula
    const fechaEmision = req.body.fechaEmision

    try {
        if(!idFuncion || !idSala || !idPelicula || !fechaEmision) {
            throw(`campo vacio`)
        }

        const result = await actualizarFuncion(idFuncion, idSala, idPelicula, fechaEmision);

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
}

const deletefuncion = async (req, res) => {
    const idFuncion = req.body.idFuncion

    try {
        if(!idFuncion) {
            throw(`campo vacio`)
        }

        const result = await eliminarFuncion(idFuncion);

        res.json(result)
    } catch (error) {
        res.status(400).send(`error!\n\n${error}`)
    }
}

module.exports = {getAll, getForId, create, update, deletefuncion}