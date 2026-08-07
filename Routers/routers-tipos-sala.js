const express = require(`express`)
const routerTipoSala = express.Router();
const {getall, getForId, create, update, eliminarSala} = require('../Controllers/controllers-tipos-sala')

routerTipoSala.get('/', getall)
routerTipoSala.get('/id', getForId)
routerTipoSala.post('/crear', create)
routerTipoSala.put('/actualizar', update)
routerTipoSala.delete('/eliminar', eliminarSala)

module.exports = routerTipoSala