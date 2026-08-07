const { obtenerTodo, obtenerPorId, crear, actualizacion, eliminacion } = require('../Models/models-categorias')

const getall = async (req, res) =>{
    const result = await obtenerTodo()
    res.json(result)
}

const getForId = async (req, res) =>{
    const idcategoria = req.body.idCategoria

    try {

        if (!idcategoria) {
            throw('campo vacio!')
        }

        res.json(await obtenerPorId(idcategoria))
    } catch(err) {
        res.status(404).send(`error!\n\n${err}`)
    }
}

const create = async (req, res) =>{
    try {
        const nueva_categoria = req.body.nombreCategoria

        if (!nueva_categoria) {
            throw('campo vacio!')
        }
        res.json(await crear(nueva_categoria))
    } catch (err) {
        res.status(404).send(`error!\n\n${err}`)
    }
}

const update = async (req, res) =>{
    const nombreNuevo = req.body.categoriaActualizar
    const idCategoriaActualizar = req.body.idCategoria

    try {

        if (!nombreNuevo) {
            throw('campo vacio!')
        }

        res.json(await actualizacion(nombreNuevo, idCategoriaActualizar))
    } catch(err) {
        res.status(404).send(`error!\n\n${err}`)
    }
}

const deleteCategoria = async (req, res) =>{
    const idcategoriaEliminar = req.body.idCategoria

    try {

        if (!idcategoriaEliminar) {
            throw('campo vacio!')
        }

        res.json(await eliminacion(idcategoriaEliminar))
    } catch(err) {
        res.status(404).send(`error!\n\n${err}`)
    }
}

module.exports = { getall, getForId, create, update, deleteCategoria }