const express = require(`express`)
const routerDetallesReserva = express.Router();
const {getAll, getForId, create, update, deleteDetalles} = require(`../Controllers/controllers-detalles-reservas.js`)
const {crearDetallesReservaSchema, actualizarDetallesReservaSchema} = require (`../validations/validations-detalles-reservas.js`)
const validacionSchema = require(`../middlewares/validarSchema.js`);
const validarSchema = require("../middlewares/validarSchema.js");

routerDetallesReserva.get(`/`, getAll)
routerDetallesReserva.get(`/:id`, getForId)
routerDetallesReserva.post(`/crear`, validacionSchema(crearDetallesReservaSchema), create)
routerDetallesReserva.put(`/actualizar/:id`, validarSchema(actualizarDetallesReservaSchema),  update)
routerDetallesReserva.delete(`/:id`, deleteDetalles)

module.exports = routerDetallesReserva