const pool = require('../db.js')

async function obtenerTodo() {
    const result = await pool.query('SELECT * FROM categorias')

    return result.rows
} 

async function crear(nueva_categoria) {
    const result = await pool.query(`
        INSERT INTO categorias (nombre_categoria)
        VALUES ($1)
        `, [nueva_categoria])

    console.log(`operacion exitosa`)
    return result.rows
}

async function actualizacion(nombre_categoria, id_categoria) {
    const result = await pool.query(`
    UPDATE categorias
    SET nombre_categoria = $1
    WHERE id_categoria = $2
    `, [nombre_categoria, id_categoria])

    return result.rows
}

async function eliminacion(id_categoria) {
    const result = await pool.query(`
    DELETE FROM categorias
    WHERE id_categoria = $1    
    `, [id_categoria])

    return result.rows
}

module.exports = { obtenerTodo, crear, actualizacion, eliminacion }