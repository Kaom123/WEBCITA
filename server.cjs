const { google } = require('googleapis');
const express = require('express');
const cors = require('cors');
const credentials = require('./credentials.json'); // Cargar el archivo JSON directamente

const app = express();

// Configuración de CORS
app.use(cors({
    origin: '*', // Permite solicitudes desde cualquier origen
    credentials: true,
    optionsSuccessStatus: 200,
}));

// Middleware para parsear JSON y URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Autenticación con Google Sheets API
const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    credentials: credentials,
});

// Ruta POST para agregar datos a Google Sheets
app.post('/add', async (req, res) => {
    const { name, telefono, email, persona, material, servicio, nivel, mensaje, idioma } = req.body;

    // Validación básica de datos
    if (!name || !email) {
        return res.status(400).send('Nombre y email son campos obligatorios.');
    }

    try {
        const sheets = google.sheets({ version: 'v4', auth });

        // ID de la hoja de cálculo y rango
        const spreadsheetId = '1ETNu4x32wtuzD6S8EpR-4UKWZKv8n_1ONWIxKIGM6xc'; // Reemplaza con tu ID de hoja de cálculo
        const range = 'Sheet1!A1'; // Especifica el nombre de la hoja y el rango

        // Agregar datos a la hoja de cálculo
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED', // Los datos se interpretan como valores ingresados por el usuario
            resource: {
                values: [[name, telefono, email, persona, material, servicio, nivel, mensaje, idioma]],
            },
        });

        console.log('Datos agregados correctamente:', response.data);
        res.status(200).send('Datos agregados correctamente');
    } catch (error) {
        console.error('Error al agregar datos:', error);
        res.status(500).send('Error al agregar datos');
    }
});

// Iniciar el servidor
app.listen(2412, () => {
    console.log('Servidor activo en http://localhost:2412');
});