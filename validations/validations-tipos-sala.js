const joi = require('joi')
const crearTipoSalaSchema = joi.object({
    nombreTipoSala : joi.string().trim().min(2).max(20).uppercase().required(),
    precioAsiento : joi.number().trim().positive()
})

const actualizarTipoSalaSchema = crearTipoSalaSchema.fork([`nombreTipoSala`, `precioAsiento`], (schema) => schema.optional()).min(1);


module.exports = {crearTipoSalaSchema, actualizarTipoSalaSchema}