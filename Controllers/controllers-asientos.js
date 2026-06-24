const {obtenerTodo, obtenerPorId, crearAsiento, actualizarAsiento, eliminarAsiento} = require(`../Models/models-asientos`)

const getAll = async (req, res) => {
    const result = await obtenerTodo();

    res.json(result);
}

const getForId = async (req, res) => {
    const idAsiento = req.body.idAsiento
    
    try {
        if (!idAsiento) {
            throw (`campo vacio`)
        }

        const result = await obtenerPorId(idAsiento);

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

const create = async (req, res) => {
    const codigoAsiento = req.body.codigoAsiento
    const idSala = req.body.idSala

    try {
        if (!codigoAsiento || !idSala) {
            throw (`campo vacio`)
        }

        const result = await crearAsiento(codigoAsiento, idSala);

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

const update = async (req, res) => {
    const idAsiento = req.body.idAsiento
    const codigoAsiento = req.body.codigoAsiento
    const idSala = req.body.idSala

    try {
        if (!idAsiento || !codigoAsiento || !idSala) {
            throw (`campo vacio`)
        }

        const result = await actualizarAsiento(idAsiento, codigoAsiento, idSala);

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

const deleteAsiento = async (req, res) =>{
    const idAsiento = req.body.idAsiento
    
    try {
        if (!idAsiento) {
            throw (`campo vacio`)
        }

        const result = await eliminarAsiento(idAsiento);

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

module.exports = {getAll, getForId, create, update, deleteAsiento}