const express = require(`express`)
const routerUsuarios = express.Router()
const {getAll, getForId, create, update, deleteUsuario} = require(`../Controllers/controllers-usuarios`)
const {crearUsuarioSchema, actualizarUsuarioSchema} = require(`../validations/validations-usuarios`)
const validacionSchema = require(`../middlewares/validarSchema.js`)

routerUsuarios.get(`/`, getAll);
routerUsuarios.get(`/:id`, getForId);
routerUsuarios.post(`/crear`, validacionSchema(crearUsuarioSchema), create);
routerUsuarios.put(`/actualizar/:id`,validacionSchema(actualizarUsuarioSchema), update);
routerUsuarios.delete(`/:id`, deleteUsuario);

module.exports = routerUsuarios