const {getall, create, update, deleteClasificacionEdad} = require(`../Models/models-clasificacion-edad`)

const visualizacion = async (req, res) => {
    const result = await getall();
    res.json(result)
}

const crearClasificacionEdad = async (req, res) => {

    try {
        const nombreClasificacionEdad = req.body.nombreClasificacionEdad;
        if(!nombreClasificacionEdad) {
            throw (`Campo nombre vacio`)
        }

        res.json(await create(nombreClasificacionEdad))
    } catch (error) {
        res.status(400).send(`Error!\n\n${error}`)
    }
}

const actualizarClasificacion = async (req, res) => {
    const idClasificacionEdad = req.body.idClasificacionEdad
    const nombreClasificacionEdad = req.body.nombreClasificacionEdad

    try {
        const result = await update(nombreClasificacionEdad, idClasificacionEdad);

        if (!idClasificacionEdad) {
            throw (`campo id vacio`)
        }

        if (!nombreClasificacionEdad) {
            throw (`campo nombre vacio`)
        }

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

const deleteClasificacion = async (req, res) => {
    const idClasificacionEdad = req.body.idClasificacionEdad;
    try {
        const result = await deleteClasificacionEdad(idClasificacionEdad);
         if (!idClasificacionEdad) {
            throw (`campo id vacio`)
        }

        res.json(result)
    } catch (error) {
        res.status(400).send(`!error\n\n${error}`)
    }
}

module.exports = {deleteClasificacion, crearClasificacionEdad, visualizacion, actualizarClasificacion}