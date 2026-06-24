//controller

const {obtenerTodo, crearPelicula, actualizarPelicula, eliminarPelicula} = require(`../Models/models-peliculas`);

const getall = async (req, res) => {
    res.json(await obtenerTodo())
}

const create = async (req, res) => {
    const nombrePelicula = req.body.nombrePelicula;
    const categoria = req.body.categoria;
    const clasificacionEdad = req.body.clasificacionEdad;
    const duracion = req.body.duracion;

    try {
        const result = await crearPelicula(nombrePelicula, categoria, clasificacionEdad, duracion);

        if(!nombrePelicula || !categoria || !clasificacionEdad || !duracion) {
            throw (`No puede haber un campo vacio!`)
        }

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

const update = async (req, res) => {
    const idPelicula = req.body.idPelicula
    const nombrePelicula = req.body.nombrePelicula
    const categoria = req.body.categoria
    const clasificacionEdad = req.body.clasificacionEdad
    const duracion = req.body.duracion

    try {
        const result = await actualizarPelicula(idPelicula, nombrePelicula, categoria, clasificacionEdad, duracion);

        if(!idPelicula || !nombrePelicula || !categoria || !clasificacionEdad || !duracion) {
            throw (`No puede haber un campo vacio!`)
        }

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

const deletePelicula = async (req, res) => {
    const idPelicula = req.body.idPelicula

    try {
        if (!idPelicula) {
            throw (`campo vacio`)
        }
        const result = await eliminarPelicula(idPelicula);

        res.json(result)
    } catch (error) {
        res.status(400).send(`Error\n\n${error}`)
    }
}

module.exports = {getall, create, update, deletePelicula}