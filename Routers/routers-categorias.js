const express = require('express');
const routerCategoria = express.Router();
const { getall, getForId, create, update, deleteCategoria } = require(`../Controllers/controllers-categorias`)
const {crearCategoriaSchema, actualizarCategoriaSchema} = require(`../validations/validations-categorias`)
const validarSchema = require(`../middlewares/validarSchema`)

routerCategoria.get('/', getall)
routerCategoria.get(`/:id`, getForId)
routerCategoria.post('/crear', validarSchema(crearCategoriaSchema), create)
routerCategoria.put('/actualizar/:id',validarSchema(actualizarCategoriaSchema), update)
routerCategoria.delete('/:id', deleteCategoria)

module.exports = routerCategoria;