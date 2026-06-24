const {eliminarTipoSala, actualizarTipoSala, crearTipoSala, mostrarSalas} = require(`../Models/module-tipos-sala`)

const getall = async (req, res) => {
    const result = await mostrarSalas();
    res.json(result)
}

const create = async (req, res) => {
    const nombreTipoSala = req.body.nombreTipoSala;

    try {
        if (!nombreTipoSala) {
            throw res.status(400).send('campo vacio')
        }

        const result = await crearTipoSala(nombreTipoSala);
        res.json(result)
    
    } catch(err) {
        res.send(`error!!\n\n${err}`)
    }
}

const update = async (req, res) => {
    const nombre_tipos_sala = req.body.nombreTipoSala
    const id_tipos_sala = req.body.idTipoSala

    try {
        if (!nombre_tipos_sala) {
            throw res.status(400).send('Campo Nombre, Vacio')
        }

        if (!id_tipos_sala) {
            throw res.status(400).send('Campo Id, Vacio')
        }
        const result = await actualizarTipoSala(nombre_tipos_sala, id_tipos_sala);
        res.json(result)

    } catch (err) {
        res.send(`error!\n\n${err}`)
    }
}

const eliminarSala = async (req, res) => {
    const id_tipos_sala = req.body.idTipoSala

    try {

        if (!id_tipos_sala) {
            throw res.status(400).send('Campo Id, Vacio')
        } 
        const result = await eliminarTipoSala(id_tipos_sala);
        res.json(result)
    } catch (err) {
        res.status(404).send(`error!\n\n${err}`)
    }
}

module.exports = {getall, create, update, eliminarSala}