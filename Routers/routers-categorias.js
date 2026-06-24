const express = require('express');
const routerCategoria = express.Router();
const { getall, create, update, deleteCategoria } = require(`../Controllers/controllers-categorias`)

routerCategoria.get('/', getall)
routerCategoria.post('/crear', create)
routerCategoria.put('/actualizar', update)
routerCategoria.delete('/eliminar', deleteCategoria)

module.exports = routerCategoria;