const joi = require('joi');

// Esquema para validar la creación de una reserva (POST)
const crearReservaSchema = joi.object({
  // Aquí defines cada campo del req.body y sus reglas de Joi
  idUsuario : joi.number().integer().positive().required(),
  idFuncion : joi.number().integer().positive().required(),
  idAsiento : joi.array().items(joi.number().integer().positive()).min(1).required()
}); 

module.exports = {
  crearReservaSchema
};