const joi = require ('joi')

const crearCategoriaSchema = joi.object({
    nuevaCategoria : joi.string().trim().min(1).required()
})

module.exports = {nuevaCategoria}