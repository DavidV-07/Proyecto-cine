const joi = require('joi')

const crearDetallesEdadSchema = joi.object({
    nombreClasificacionEdad : joi.string().trim().min(1).max(3).required()
})

const actualizarDetallesEdadSchema = crearDetallesEdadSchema.fork([`nombreClasificacionEdad`], (schema) => schema.optional()).min(1);

module.exports = {crearDetallesEdadSchema, actualizarDetallesEdadSchema}