const express = require('express');
const routerReservas = express.Router();
const { getAll, getForId, create, update, deleteReserva } = require('../Controllers/controllers-reservas');

//Importamos el esquema de validación de reservas
const { crearReservaSchema } = require('../validations/reserva.validation');

//Importamos el middleware genérico
const validarSchema = require('../middlewares/validarSchema');

routerReservas.get('/', getAll);
routerReservas.get('/id', getForId);

//Inyectamos validarSchema(crearReservaSchema) justo antes del controlador create
routerReservas.post('/crear', validarSchema(crearReservaSchema), create);

routerReservas.put('/actualizar', update);
routerReservas.delete('/eliminar', deleteReserva);

module.exports = routerReservas;