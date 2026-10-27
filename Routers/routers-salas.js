const express = require(`express`);
const routerSalas = express.Router()
const {getAll, getForId,  create, update, deleteSala} = require(`../Controllers/controllers-salas`);
const {crearSalaSchema, actualizarSalaSchema} = require(`../validations/validations-salas.js`)
const validacionSchema = require(`../middlewares/validarSchema.js`)

routerSalas.get(`/`, getAll);
routerSalas.get(`/:id`, getForId);
routerSalas.post(`/crear`, validacionSchema(crearSalaSchema), create);
routerSalas.put(`/actualizar/:id`, validacionSchema(actualizarSalaSchema), update);
routerSalas.delete(`/:id`, deleteSala);

module.exports = routerSalas