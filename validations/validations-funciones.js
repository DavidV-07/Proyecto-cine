const joi = require('joi')

const crearFuncionSchema = joi.object({
    idSala : joi.number().integer().positive().required(),
    idPelicula : joi.number().integer().positive().required(),
    fechaEmision : joi.date().iso().required()
})

const actualizarFuncionSchema = crearFuncionSchema.fork([`idSala`, `idPelicula`, `fechaEmision`], (schema) => schema.optional()).min(1);

module.exports = {crearFuncionSchema, actualizarFuncionSchema}