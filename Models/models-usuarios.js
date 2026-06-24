//models

const pool = require(`../db`);

const obtenerTodo = async () => {
    const result = await pool.query(`
        SELECT * FROM usuario
        `)

    return result.rows
}

const obtenerPorId = async (idUsuario) => {
    const result = await pool.query(`
        SELECT * FROM usuario
        WHERE id_usuario = $1
        `, [idUsuario])

    return result.rows
}

const crearUsuario = async (nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, tlfUsuario) => {
    const result = await pool.query(`
        INSERT INTO usuario (nombre_usuario, apellido_usuario, cedula_usuario, email_usuario, telefono_usuario)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `, [nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, tlfUsuario])

    return result.rows
}

const actualizarUsuario = async (idUsuario, nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, tlfUsuario) => {
    const result = await pool.query(`
        UPDATE usuario
        SET nombre_usuario = $1,
            apellido_usuario = $2,
            cedula_usuario = $3,
            email_usuario = $4,
            telefono_usuario = $5
        WHERE id_usuario = $6
        RETURNING *
        `, [nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, tlfUsuario, idUsuario])

    return result.rows
}

const eliminarUsuario = async (idUsuario) => {
    const result = await pool.query(`
        DELETE FROM usuario
        WHERE id_usuario = $1
        RETURNING *
        `, [idUsuario])

    return result.rows
}

module.exports = {obtenerTodo, obtenerPorId, crearUsuario, actualizarUsuario, eliminarUsuario}