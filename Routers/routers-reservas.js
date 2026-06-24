const express = require(`express`);
const routerReservas = express.Router()
const {getAll, getForId, create, update, deleteReserva} = require(`../Controllers/controllers-reservas`)

routerReservas.get(`/`, getAll)
routerReservas.get(`/id`, getForId)
routerReservas.post(`/crear`, create)
routerReservas.put(`/actualizar`, update)
routerReservas.delete(`/eliminar`, deleteReserva)

module.exports = routerReservas