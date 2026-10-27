const express = require(`express`);
const routerClasificacionEdad = express.Router();
const {obtenerTodo, obtenerPorId, deleteClasificacion, crearClasificacionEdad, actualizarClasificacion} = require(`../Controllers/controllers-clasificacion-edad`)
const {crearDetallesEdadSchema, actualizarDetallesEdadSchema} = require(`../validations/validations-clasificaciones-edad`)
const validarSchema = require(`../middlewares/validarSchema`)

routerClasificacionEdad.get(`/`, obtenerTodo);
routerClasificacionEdad.get(`/:id`, obtenerPorId)
routerClasificacionEdad.post(`/crear`, validarSchema(crearDetallesEdadSchema), crearClasificacionEdad);
routerClasificacionEdad.put(`/actualizar/:id`, validarSchema(actualizarDetallesEdadSchema), actualizarClasificacion);
routerClasificacionEdad.delete(`/:id`, deleteClasificacion);

module.exports = routerClasificacionEdad