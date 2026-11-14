// ============================================================
// server.js - Aplicación web mínima para despliegue en PaaS
// Proyecto: M4S1 CECyTEH - Mi primera app en la nube
// ============================================================

const express = require('express');
const app = express();

// REGLA DE ORO: El puerto SIEMPRE se toma de process.env.PORT
// porque el proveedor PaaS (Render, Railway) lo asigna dinámicamente.
const PUERTO = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    const nombre = process.env.NOMBRE_ALUMNO || 'Juan Manuel Olvera López';
    res.send(`
        <html>
        <head><title>Mi App en la Nube</title></head>
        <body style="font-family: Arial; text-align: center; padding: 50px; background: #e3f2fd;">
            <h1>¡Mi aplicación está en la nube!</h1>
            <h2>Alumno: ${nombre}</h2>
            <p>Módulo IV - Submódulo 1 - CECyTEH</p>
            <p>Servidor funcionando correctamente</p>
        </body>
        </html>
    `);
});

// Ruta de salud (health check) para monitoreo
app.get('/salud', (req, res) => {
    res.json({ estado: 'ok', mensaje: 'Servidor activo', puerto: PUERTO });
});

// Un único listen, al final, con el puerto correcto
app.listen(PUERTO, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});