const joi = require ('joi')
const crearUsuarioSchema = joi.object({
    nombreUsuario : joi.string().trim().min(3).max(50).uppercase().required(),
    apellidoUsuario : joi.string().trim().min(3).max(50).uppercase().required(),
    cedulaUsuario : joi.string().trim().min(4).max(12).required(),
    emailUsuario : joi.string().trim().min(7).max(50).email().required(),
    tlfUsuario : joi.string().trim().min(8).max(20).required()
})

module.exports = {crearUsuarioSchema}