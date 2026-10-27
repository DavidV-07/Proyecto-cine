const {getall, getForId, create, update, deletePelicula} = require(`../Controllers/controllers-peliculas`)
const express = require(`express`)
const routerPeliculas = express.Router();
const {crearPeliculaSchema, actualizarPeliculaSchema} = require(`../validations/validations-peliculas.js`)
const validacionSchema = require(`../middlewares/validarSchema.js`)

routerPeliculas.get('/', getall);
routerPeliculas.get('/:id', getForId);
routerPeliculas.post('/crear',validacionSchema(crearPeliculaSchema), create);
routerPeliculas.put('/actualizar/:id', validacionSchema(actualizarPeliculaSchema), update);
routerPeliculas.delete(`/:id`, deletePelicula);

module.exports = routerPeliculas