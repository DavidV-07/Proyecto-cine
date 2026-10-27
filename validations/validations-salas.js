const joi = require ('joi')
const crearSalaSchema = joi.object({
    tipoSala : joi.number().integer().positive().required(),
    capacidad : joi.number().integer().positive().required()
})

const actualizarSalaSchema = crearSalaSchema.fork([`tipoSala`, `capacidad`], (schema) => schema.optional()).min(1);


module.exports = {crearSalaSchema, actualizarSalaSchema}