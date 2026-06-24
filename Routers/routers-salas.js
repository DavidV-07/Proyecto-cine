const express = require(`express`);
const routerSalas = express.Router()
const {getAll, getForId,  create, update, deleteSala} = require(`../Controllers/controllers-salas`);

routerSalas.get(`/`, getAll);
routerSalas.get(`/id`, getForId);
routerSalas.post(`/crear`, create);
routerSalas.put(`/actualizar`, update);
routerSalas.delete(`/eliminar`, deleteSala);

module.exports = routerSalas