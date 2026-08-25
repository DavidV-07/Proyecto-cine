const joi = require ('joi')
const crearSalaSchema = joi.object({
    tipoSala : joi.number().integer().positive().required(),
    capacidad : joi.number().integer().positive().required()
})

module.exports = {crearSalaSchema}