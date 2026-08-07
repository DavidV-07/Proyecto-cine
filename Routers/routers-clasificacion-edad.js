const express = require(`express`);
const routerClasificacionEdad = express.Router();
const {obtenerTodo, deleteClasificacion, crearClasificacionEdad, actualizarClasificacion} = require(`../Controllers/controllers-clasificacion-edad`)

routerClasificacionEdad.get(`/`, obtenerTodo);
routerClasificacionEdad.get(`/id`, obtenerTodo)
routerClasificacionEdad.post(`/crear`, crearClasificacionEdad);
routerClasificacionEdad.patch(`/actualizar`, actualizarClasificacion);
routerClasificacionEdad.delete(`/eliminar`, deleteClasificacion);

module.exports = routerClasificacionEdad