const pool = require('../db')

async function mostrarSalas() {
    const result = await pool.query(`SELECT * FROM tipos_sala`)

    return result.rows
}

async function crearTipoSala(nombreTipoSala) {
    const result = await pool.query(`
        INSERT INTO tipos_sala ("nombre_tipos_sala")
        VALUES ($1)`, [nombreTipoSala])
}

async function actualizarTipoSala(nombreTipoSala, idTipoSala) {
    const result = await pool.query(`
        UPDATE tipos_sala
        SET nombre_tipos_sala = $1
        WHERE id_tipos_sala = $2`, [nombreTipoSala, idTipoSala])
}

async function eliminarTipoSala(idTipoSala) {
    const result = await pool.query(`
        DELETE FROM tipos_sala
        WHERE id_tipos_sala = $1`, [idTipoSala])
}

module.exports = {eliminarTipoSala, actualizarTipoSala, crearTipoSala, mostrarSalas}