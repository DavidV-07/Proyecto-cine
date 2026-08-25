const joi = require('joi');

const crearPeliculaSchema = joi.object({
    nombrePelicula : joi.string().trim().max(50).required(),
    categoria : joi.number().integer().positive().required(),
    clasificacionEdad : joi.number().integer().positive().required(),
    duracion : joi.string().trim().max(10).required()
})

module.exports = {crearPeliculaSchema}