const express = require(`express`)
const routerDetallesReserva = express.Router();
const {getAll, getForId, create, update, deleteDetalles} = require(`../Controllers/controllers-detalles-reservas.js`)

routerDetallesReserva.get(`/`, getAll)
routerDetallesReserva.get(`/id`, getForId)
routerDetallesReserva.post(`/crear`, create)
routerDetallesReserva.put(`/actualizar`, update)
routerDetallesReserva.delete(`/eliminar`, deleteDetalles)

module.exports = routerDetallesReserva