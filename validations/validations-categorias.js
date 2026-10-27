const joi = require ('joi')

const crearCategoriaSchema = joi.object({
    nuevaCategoria : joi.string().trim().min(1).required()
})

const actualizarCategoriaSchema = crearCategoriaSchema.fork([`nuevaCategoria`], (schema) => schema.optional()).min(1);

module.exports = {crearCategoriaSchema, actualizarCategoriaSchema}