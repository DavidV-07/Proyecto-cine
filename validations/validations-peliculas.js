const joi = require('joi');

const crearPeliculaSchema = joi.object({
    nombrePelicula : joi.string().trim().max(50).required(),
    categoria : joi.number().integer().positive().required(),
    clasificacionEdad : joi.number().integer().positive().required(),
    duracion : joi.string().trim().max(10).required()
})

const actualizarPeliculaSchema = crearPeliculaSchema.fork([`nombrePelicula`, `categoria`, `clasificacionEdad`, `duracion`], (schema) => schema.optional()).min(1);

module.exports = {crearPeliculaSchema, actualizarPeliculaSchema}