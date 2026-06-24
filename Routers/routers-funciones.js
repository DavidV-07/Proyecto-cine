const express = require(`express`)
const routerFunciones = express.Router()
const {getAll, getForId, create, update, deletefuncion} = require(`../Controllers/controllers-funciones`)

routerFunciones.get(`/`, getAll)
routerFunciones.get(`/id`, getForId)
routerFunciones.post(`/crear`, create)
routerFunciones.put(`/actualizar`, update)
routerFunciones.delete(`/eliminar`, deletefuncion)

module.exports = routerFunciones