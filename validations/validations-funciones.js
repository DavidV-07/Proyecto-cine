const joi = require('joi')

const crearFuncionSchema = joi.object({
    idSala : joi.number().integer().positive().required(),
    idPelicula : joi.number().integer().positive().required(),
    fechaEmision : joi.date().iso().required()
})

module.exports = {crearFuncionSchema}