const joi = require('joi')

const crearDetallesReservaSchema = joi.object({
    idReserva : joi.number().integer().positive().required(),
    idAsiento : joi.number().integer().positive().required(),
    precioAplicado : joi.number().required()
})

const actualizarDetallesReservaSchema = crearDetallesReservaSchema.fork([`idReserva`, `idAsiento`, `precioAplicado`], (schema) => schema.optional()).min(1);

module.exports = {crearDetallesReservaSchema, actualizarDetallesReservaSchema}