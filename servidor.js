//servidor

const express = require('express');
const app = express();
const pool = require('./db');
const init = require('./migrations/init')
const routerCategoria = require('./Routers/routers-categorias.js')
const routerTipoSala = require('./Routers/routers-tipos-sala.js')
const routerClasificacionEdad = require(`./Routers/routers-clasificacion-edad.js`)
const routerPeliculas = require(`./Routers/routers-peliculas.js`)
const routerUsuarios = require(`./Routers/routers-usuarios.js`)
const routerSalas = require(`./Routers/routers-salas.js`)
const routerAsientos = require(`./Routers/routers-asientos.js`)
const routerReservas = require(`./Routers/routers-reservas.js`)
const routerFunciones = require(`./Routers/routers-funciones.js`)
const routerDetallesReserva = require(`./Routers/routers-detalles-reservas.js`)
const PUERTO = process.env.PORT || 3000;

async function start() {

    app.use(express.json())

    await init();

    app.use('/categorias', routerCategoria);
    app.use('/tipos-sala', routerTipoSala);
    app.use(`/clasificacion`, routerClasificacionEdad);
    app.use(`/peliculas`, routerPeliculas);
    app.use(`/usuarios`, routerUsuarios);
    app.use(`/salas`, routerSalas);
    app.use(`/asientos`, routerAsientos);
    app.use(`/funciones`, routerFunciones);
    app.use(`/reservas`, routerReservas);
    app.use(`/detalles-reservas`, routerDetallesReserva);

    app.listen(PUERTO, ()=> {
    console.log(`corriendo servidor ${PUERTO}`)
})
}

start();