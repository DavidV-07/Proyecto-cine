const pool = require(`../db`)

const obtenerTodo = async () => {
    const result = await pool.query(`
        SELECT * FROM reservas
        `)

    return result.rows
}

const obtenerReservaPorId = async (idReserva) => {
    const result = await pool.query(`
        SELECT * FROM reservas
        WHERE id_reserva = $1
        `, [idReserva])

    return result.rows
}

const crearReserva = async (idUsuario, idFuncion, totalPago) => {
    const result = await pool.query(`
        INSERT INTO reservas (id_usuario, id_funcion, total_pago)
        VALUES($1, $2, $3)
        RETURNING *
        `, [idUsuario, idFuncion, totalPago])

    return result.rows
}

const actualizarReserva = async (idReserva, idUsuario, idFuncion, totalPago) => {
    const result = await pool.query(`
        UPDATE reservas
        SET id_usuario = $2,
            id_funcion = $3, 
            total_pago = $4
        WHERE id_reserva = $1
        RETURNING *
        `, [idReserva, idUsuario, idFuncion, totalPago])

    return result.rows
}

const eliminarReserva = async (idReserva) => {
    const result = await pool.query(`
        DELETE FROM reservas
        WHERE id_reserva = $1
        RETURNING *
        `, [idReserva])

    return result.rows
}

module.exports = {obtenerTodo, obtenerReservaPorId, crearReserva, actualizarReserva, eliminarReserva}