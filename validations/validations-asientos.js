const joi = require ('joi')

const crearAsientoSchema = joi.object({
    codigoAsiento : joi.string().trim().min(2).max(4).required(), 
    idSala : joi.number().integer().positive().required()
})

module.exports = {crearAsientoSchema}