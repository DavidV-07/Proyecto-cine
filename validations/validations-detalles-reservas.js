const joi = require('joi')

const crearDetallesReservaSchema = joi.object({
    idReserva : joi.number().integer().positive().required(),
    idAsiento : joi.number().integer().positive().required(),
    precioAplicado : joi.number().required()
})

module.exports = {crearDetallesReservaSchema}