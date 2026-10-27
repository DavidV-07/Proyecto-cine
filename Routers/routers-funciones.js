const express = require(`express`)
const routerFunciones = express.Router()
const {getAll, getForId, create, update, deletefuncion} = require(`../Controllers/controllers-funciones`)
const {crearFuncionSchema, actualizarFuncionSchema} = require(`../validations/validations-funciones.js`)
const validacionSchema = require(`../middlewares/validarSchema.js`)

routerFunciones.get(`/`, getAll)
routerFunciones.get(`/:id`, getForId)
routerFunciones.post(`/crear`,validacionSchema(crearFuncionSchema), create)
routerFunciones.put(`/actualizar/:id`, validacionSchema(actualizarFuncionSchema), update)
routerFunciones.delete(`/:id`, deletefuncion)

module.exports = routerFunciones