const pool = require('../db')

async function mostrarSalas() {
    const result = await pool.query(`SELECT * FROM tipos_sala`)

    return result.rows
}

async function obtenerPorId(idTipoSala) {
    const result = await pool.query(`
        SELECT FROM tipos_sala
        WHERE id_tipos_sala = $1
        RETURNING *`, [idTipoSala])
}

async function crearTipoSala(nombreTipoSala, precioAsiento) {
    const result = await pool.query(`
        INSERT INTO tipos_sala (nombre_tipos_sala, precio_asiento)
        VALUES ($1, $2)
        RETURNING *`, [nombreTipoSala, precioAsiento])
}

async function actualizarTipoSala(nombreTipoSala, idTipoSala) {
    const result = await pool.query(`
        UPDATE tipos_sala
        SET nombre_tipos_sala = $1
        WHERE id_tipos_sala = $2
        RETURNING *`, [nombreTipoSala, idTipoSala])
}

async function eliminarTipoSala(idTipoSala) {
    const result = await pool.query(`
        DELETE FROM tipos_sala
        WHERE id_tipos_sala = $1
        RETURNING *`, [idTipoSala])
}

module.exports = {obtenerPorId, eliminarTipoSala, actualizarTipoSala, crearTipoSala, mostrarSalas}