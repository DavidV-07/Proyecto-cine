const validarSchema = (schema) => {
  return (req, res, next) => {
    // 1. Ejecutamos la validación de Joi sobre el cuerpo de la petición
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    // 2. Si se detectó algún error de formato o tipo
    if (error) {
      // Formateamos los mensajes de error para que sean legibles en la respuesta
      const listaErrores = error.details.map(detalle => detalle.message);

      // Cortamos la petición y devolvemos un estado 400 (Bad Request)
      return res.status(400).json({
        mensaje: 'Error de validación en los datos enviados',
        errores: listaErrores
      });
    }

    //se le asigna los valores modificados a req
    req.body = value
    // 3. Si todo está correcto, permitimos que la petición continúe al controlador
    next();
  };
};

module.exports = validarSchema;