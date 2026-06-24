const pool = require('../db')

async function init() {
    await pool.query(`create table if not exists "categorias"(
     "id_categoria" SERIAL primary key,      
     "nombre_categoria" text 
    );

    create table if not exists "clasificacion_edad" (
        "id_clasificacion_edad" SERIAL primary key,
        "nombre_clasificacion_edad" text
    );

    create table if not exists "tipos_sala" (
        "id_tipos_sala" SERIAL primary key,
        "nombre_tipos_sala" text
    );

    CREATE TABLE IF NOT EXISTS "salas" (
        "id_sala" SERIAL PRIMARY KEY,
        "tipo_sala" INTEGER,
        "capacidad" INTEGER,
        FOREIGN KEY ("tipo_sala") REFERENCES "tipos_sala" ("id_tipos_sala")
    );

    CREATE TABLE IF NOT EXISTS "peliculas" (
        "id_pelicula" SERIAL PRIMARY KEY,
        "nombre_pelicula" VARCHAR(100),
        "categoria" INTEGER,
        "clasificacion_edad" INTEGER,
        "duracion" INTEGER,
        FOREIGN KEY ("categoria") REFERENCES "categorias" ("id_categoria"),
        FOREIGN KEY ("clasificacion_edad") REFERENCES "clasificacion_edad" ("id_clasificacion_edad")
    );

    CREATE TABLE IF NOT EXISTS "usuario" (
        "id_usuario" SERIAL PRIMARY KEY,
        "nombre_usuario" VARCHAR(50),
        "apellido_usuario" VARCHAR(50),
        "cedula_usuario" VARCHAR(12),
        "email_usuario" VARCHAR(50),
        "telefono_usuario" VARCHAR(20)
    );
    
    create table if not exists "asientos"(
        "id_asiento" SERIAL primary key,
        "codigo_asientos" varchar(5),
        "id_sala" integer,

        FOREIGN KEY ("id_sala") REFERENCES "salas" ("id_sala")
    );
        
    create table if not exists "funciones"(
        "id_funcion" SERIAL primary key,
        "id_sala" integer,
        "id_pelicula" integer,
        "fecha_emision" timestamptz,

        FOREIGN KEY ("id_sala") REFERENCES "salas" ("id_sala"),
        FOREIGN KEY ("id_pelicula") REFERENCES "peliculas" ("id_pelicula")
    );

    CREATE TABLE IF NOT EXISTS "reservas" (
        "id_reserva" SERIAL PRIMARY KEY,
        "id_usuario" INTEGER,
        "id_funcion" INTEGER,
        "total_pago" NUMERIC,

        FOREIGN KEY ("id_usuario") REFERENCES "usuario" ("id_usuario"),
        FOREIGN KEY ("id_funcion") REFERENCES "funciones" ("id_funcion")
    );

    CREATE TABLE IF NOT EXISTS "detalles_reserva" (
        "id_detalles" SERIAL PRIMARY KEY,
        "id_reserva" INTEGER,
        "id_asiento" INTEGER,
        "precio_aplicado" NUMERIC,

        FOREIGN KEY ("id_reserva") REFERENCES "reservas" ("id_reserva"),
        FOREIGN KEY ("id_asiento") REFERENCES "asientos" ("id_asiento")
    );
    `
)

console.log("tablas listas!")
}

module.exports = init;