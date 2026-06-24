const pool = require('../db');

async function getall() {
    const result = await pool.query(`SELECT * FROM clasificacion_edad`)

    return result.rows
}

async function create(nombreClasificacionEdad) {
    const result = await pool.query(`
        INSERT INTO clasificacion_edad (nombre_clasificacion_edad)
        VALUES ($1)`, [nombreClasificacionEdad])

    return result.rows
}

async function update(nombreClasificacionEdad, idClasificacionEdad) {
    const result = await pool.query(`
        UPDATE clasificacion_edad
        SET nombre_clasificacion_edad = $1
        WHERE id_clasificacion_edad = $2
        `, [nombreClasificacionEdad, idClasificacionEdad]) 

    return result.rows
}

async function deleteClasificacionEdad(idClasificacionEdad) {
    const result = await pool.query(`
        DELETE FROM clasificacion_edad
        WHERE id_clasificacion_edad = $1
        `, [idClasificacionEdad])

    return result.rows
}

module.exports = {getall, create, update, deleteClasificacionEdad}