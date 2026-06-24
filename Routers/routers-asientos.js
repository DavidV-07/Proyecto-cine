const express = require('express');
const routerAsientos = express.Router();
const { getAll, getForId,  create, update, deleteAsiento } = require(`../Controllers/controllers-asientos.js`)

routerAsientos.get('/', getAll)
routerAsientos.get(`/id`, getForId);
routerAsientos.post('/crear', create)
routerAsientos.put('/actualizar', update)
routerAsientos.delete('/eliminar', deleteAsiento)

module.exports = routerAsientos;