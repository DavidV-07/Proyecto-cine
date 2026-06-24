//routers

const {getall, create, update, deletePelicula} = require(`../Controllers/controllers-peliculas`)
const express = require(`express`)
const routerPeliculas = express.Router();

routerPeliculas.get('/', getall);
routerPeliculas.post('/crear', create);
routerPeliculas.put('/actualizar', update);
routerPeliculas.delete(`/eliminar`, deletePelicula);

module.exports = routerPeliculas