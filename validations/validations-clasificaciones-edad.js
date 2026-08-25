const joi = require('joi')

const crearDetallesEdadSchema = joi.object({
    nombreClasificacionEdad : joi.string().trim().min(1).max(3).required()
})

module.exports = {crearDetallesEdadSchema}