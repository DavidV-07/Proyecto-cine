const pool = require(`../db`)

const obtenerTodo = async () => {
    const result = await pool.query(`
        SELECT * FROM salas
        `)
    
    return result.rows
}

const obtenerPorId = async (idSala) =>{
    const result = await pool.query(`
        SELECT * FROM salas
        WHERE id_sala = $1
        `, [idSala])

    return result.rows
}

const crearSala = async (tipoSala, capacidad) => {
    const result = await pool.query(`
        INSERT INTO "salas" (tipo_sala, capacidad)
        VALUES ($1, $2)
        RETURNING *
        `, [tipoSala, capacidad])

    return result.rows
}

const actualizarSala = async (tipoSala, capacidad, idSala) => {
    const result = await pool.query(`
        UPDATE salas
        SET tipo_sala = $1,
            capacidad = $2
        WHERE id_sala = $3
        RETURNING *
        `, [tipoSala, capacidad, idSala])

    return result.rows
}

const eliminarSala = async (idSala) => {
    const result = await pool.query(`
        DELETE FROM salas
        WHERE id_sala = $1
        RETURNING *
        `, [idSala])

    return result.rows
}

module.exports = {obtenerTodo, obtenerPorId, crearSala, actualizarSala, eliminarSala}