const pool = require(`../db`)

const obtenerTodo = async () => {
    const result = await pool.query(`
        SELECT * FROM ASIENTOS
        `)
    return result.rows
}

const obtenerPorId = async (idAsiento) => {
    const result = await pool.query(`
        SELECT * FROM asientos
        WHERE id_asiento = $1
        `, [idAsiento])

    return result.rows
}

const crearAsiento = async (codigoAsiento, idSala) => {
    const result = await pool.query(`
        INSERT INTO "asientos" (codigo_asientos, id_sala)
        VALUES ($1, $2)
        RETURNING *
        `, [codigoAsiento, idSala])

    return result.rows
}

const actualizarAsiento = async (idAsiento, codigoAsiento, idSala) => {
    const result = await pool.query(`
        UPDATE asientos
        SET codigo_asientos = $2,
            id_sala = $3
        WHERE id_asiento = $1
        RETURNING *
        `, [idAsiento, codigoAsiento, idSala])

    return result.rows
}

const eliminarAsiento = async (idAsiento) => {
    const result = await pool.query(`
        DELETE FROM asientos
        WHERE id_asiento = $1
        RETURNING *
        `, [idAsiento])

    return result.rows
}

module.exports = {obtenerTodo, obtenerPorId, crearAsiento, actualizarAsiento, eliminarAsiento}