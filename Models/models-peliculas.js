//models

const pool = require(`../db`)

const obtenerTodo = async () => {
    const result = await pool.query(`
        SELECT
            p.id_pelicula,
            p.nombre_pelicula,
            c.nombre_categoria,
            cl.nombre_clasificacion_edad,
            p.duracion
        FROM peliculas p
        INNER JOIN categorias c ON p.categoria = c.id_categoria
        INNER JOIN clasificacion_edad cl ON p.clasificacion_edad = cl.id_clasificacion_edad
        `)
    
    return result.rows
}

const crearPelicula = async (nombrePelicula, categoria, clasificacionEdad, duracion) => {
    const result = await pool.query(`
        INSERT INTO peliculas (nombre_pelicula, categoria, clasificacion_edad, duracion)
        VALUES ($1, $2, $3, $4)
        `, [nombrePelicula, categoria, clasificacionEdad, duracion])

    return result.rows
}

const actualizarPelicula = async (idPelicula, nombrePelicula, categoria, clasificacionEdad, duracion) => {
    const result = await pool.query(`
        UPDATE peliculas
        SET nombre_pelicula = $2,
            categoria = $3,
            clasificacion_edad = $4,
            duracion = $5
        WHERE id_pelicula = $1
        `, [idPelicula ,nombrePelicula, categoria, clasificacionEdad, duracion])

    return result.rows
}

const eliminarPelicula = async (idPelicula) => {
    const result = await pool.query(`
        DELETE FROM peliculas
        WHERE id_pelicula = $1
        `, [idPelicula])

    return result.rows
}

module.exports = {obtenerTodo, crearPelicula, actualizarPelicula, eliminarPelicula}