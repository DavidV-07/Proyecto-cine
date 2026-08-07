const pool = require(`../db`)

const validacionPuestoDisponible = async (client, idAsiento, idFuncion) => {
    const result = await client.query(`
        SELECT
            r.id_funcion,
            dr.id_asiento
        FROM reservas r
        INNER JOIN detalles_reserva dr ON r.id_reserva = dr.id_reserva
        WHERE dr.id_asiento = $1 AND r.id_funcion = $2
        `, [idAsiento, idFuncion])
    if (result.rows.length < 1) {
        return true;
    }

    return false;
}

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

const crearReserva = async (client, idUsuario, idFuncion) => {
    const result = await client.query(`
        INSERT INTO reservas (id_usuario, id_funcion)
        VALUES ($1, $2)
        RETURNING id_reserva
        `, [idUsuario, idFuncion])

    // Retorna directamente el numero de la reserva (ej: 52)
    return result.rows[0].id_reserva;
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

const actualizarPrecioReserva = async (client, id_reserva, total_pago) => {
    const result = await client.query(`
        UPDATE reservas
        SET total_pago = $2
        WHERE id_reserva = $1
        RETURNING *
        `, [id_reserva, total_pago])

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

module.exports = {validacionPuestoDisponible, obtenerTodo, obtenerReservaPorId, crearReserva, actualizarReserva, actualizarPrecioReserva, eliminarReserva}