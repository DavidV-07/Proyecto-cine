const express = require(`express`);
const routerClasificacionEdad = express.Router();
const {deleteClasificacion, crearClasificacionEdad, actualizarClasificacion, visualizacion} = require(`../Controllers/controllers-clasificacion-edad`)

routerClasificacionEdad.get(`/`, visualizacion);
routerClasificacionEdad.post(`/crear`, crearClasificacionEdad);
routerClasificacionEdad.patch(`/actualizar`, actualizarClasificacion);
routerClasificacionEdad.delete(`/eliminar`, deleteClasificacion);

module.exports = routerClasificacionEdad