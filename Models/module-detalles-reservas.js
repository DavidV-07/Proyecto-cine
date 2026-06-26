const pool = require(`../db`)

const obtenerTodo = async () => {
    const result = await pool.query(`
        SELECT 
            dr.id_detalles,
            dr.id_reserva,
            a.codigo_asientos,
            dr.precio_aplicado
        FROM detalles_reserva dr
        INNER JOIN asientos a
        ON dr.id_asiento = a.id_asiento
        `)
    
    return result.rows
}

const obtenerDetallesPorId = async (idDetalles) => {
    const result = await pool.query(`
        SELECT 
            dr.id_detalles,
            dr.id_reserva,
            a.codigo_asientos,
            dr.precio_aplicado
        FROM detalles_reserva dr
        INNER JOIN asientos a
        ON dr.id_asiento = a.id_asiento
        WHERE dr.id_detalles = $1
        `, [idDetalles])

    return result.rows
}

const crearDetallesReserva = async (idReserva, idAsiento, precioAplicado) => {
    const result = await pool.query(`
        INSERT INTO detalles_reserva (id_reserva, id_asiento, precio_aplicado)
        VALUES ($1, $2, $3)
        RETURNING *
        `, [idReserva, idAsiento, precioAplicado]) 
        
    return result.rows
}

const actualizarDetallesReserva = async (idDetalles, idReserva, idAsiento, precioAplicado) => {
    const result = await pool.query(`
        UPDATE detalles_reserva
        SET id_reserva = $2,
            id_asiento = $3,
            precio_aplicado = $4
        WHERE id_detalles = $1
        RETURNING *
        `, [idDetalles, idReserva, idAsiento, precioAplicado]) 
        
    return result.rows
}

const eliminarDetallesReserva = async (idDetalles) => {
    const result = await pool.query(`
        delete FROM detalles_reserva
        WHERE id_detalles = $1
        RETURNING *
        `, [idDetalles])

    return result.rows
}

module.exports = {obtenerTodo, obtenerDetallesPorId, crearDetallesReserva, actualizarDetallesReserva, eliminarDetallesReserva}