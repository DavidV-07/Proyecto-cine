const express = require('express');
const routerAsientos = express.Router();
const { getAll, getForId,  create, update, deleteAsiento } = require(`../Controllers/controllers-asientos.js`)
const {crearAsientoSchema, actualizarAsientoSchema} = require('../validations/validations-asientos.js')
const validarSchema = require('../middlewares/validarSchema.js')

routerAsientos.get('/', getAll)
routerAsientos.get(`/:id`, getForId);
routerAsientos.post('/crear', validarSchema(crearAsientoSchema), create)
routerAsientos.put('/actualizar/:id', validarSchema(actualizarAsientoSchema), update)
routerAsientos.delete('/:id', deleteAsiento)

module.exports = routerAsientos;