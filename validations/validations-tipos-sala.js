const joi = require('joi')
const crearTipoSalaSchema = joi.object({
    nombreTipoSala : joi.string().trim().min(2).max(20).uppercase().required(),
    precioAsiento : joi.number().trim().positive()
})

module.exports = {crearTipoSalaSchema}