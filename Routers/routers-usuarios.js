//routers

const express = require(`express`)
const routerUsuarios = express.Router()
const {getAll, getForId, create, update, deleteUsuario} = require(`../Controllers/controllers-usuarios`)

routerUsuarios.get(`/`, getAll);
routerUsuarios.get(`/id`, getForId);
routerUsuarios.post(`/crear`, create);
routerUsuarios.put(`/actualizar`, update);
routerUsuarios.delete(`/eliminar`, deleteUsuario);

module.exports = routerUsuarios