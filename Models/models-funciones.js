const pool = require(`../db`)

const obtenerTodo = async () => {
    const result = await pool.query(`
        SELECT 
            f.id_funcion,
            f.id_sala,
            p.nombre_pelicula,
            f.fecha_emision
        FROM funciones f
        INNER JOIN peliculas p
        ON f.id_pelicula = p.id_pelicula 
        `)

    return result.rows
}

const obtenerFuncionPorId = async (idFuncion) => {
    const result = await pool.query(`
        SELECT 
            f.id_funcion,
            f.id_sala,
            p.nombre_pelicula,
            f.fecha_emision
        FROM funciones f
        INNER JOIN peliculas p
        ON f.id_pelicula = p.id_pelicula 
        WHERE f.id_funcion = $1
        `, [idFuncion])

    return result.rows
}

const crearFuncion = async (idSala, idPelicula, fechaEmision) => {
    const result = await pool.query(`
        INSERT INTO funciones (id_sala, id_pelicula, fecha_emision)
        VALUES ($1, $2, $3)
        RETURNING *
        `, [idSala, idPelicula, fechaEmision])

    return result.rows
}

const actualizarFuncion = async (idFuncion, idSala, idPelicula, fechaEmision) => {
    const result = await pool.query(`
        UPDATE funciones
        SET id_sala = $2,
            id_pelicula = $3,
            fecha_emision = $4
        WHERE id_funcion = $1
        RETURNING *
        `, [idFuncion, idSala, idPelicula, fechaEmision])

    return result.rows
}

const eliminarFuncion = async (idFuncion) => {
    const result = await pool.query(`
        DELETE FROM funciones
        WHERE id_funcion = $1
        RETURNING *
        `, [idFuncion])

    return result.rows
}

module.exports = {obtenerTodo, obtenerFuncionPorId, crearFuncion, actualizarFuncion, eliminarFuncion}