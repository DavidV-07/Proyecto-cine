const express = require(`express`)
const routerTipoSala = express.Router();
const {getall, getForId, create, update, eliminarSala} = require('../Controllers/controllers-tipos-sala')
const {crearTipoSalaSchema, actualizarTipoSalaSchema} = require(`../validations/validations-tipos-sala.js`)
const validacionSchema = require(`../middlewares/validarSchema.js`)

routerTipoSala.get('/', getall)
routerTipoSala.get('/:id', getForId)
routerTipoSala.post('/crear', validacionSchema(crearTipoSalaSchema), create)
routerTipoSala.put('/actualizar/:id', validacionSchema(actualizarTipoSalaSchema), update)
routerTipoSala.delete('/:id', eliminarSala)

module.exports = routerTipoSala