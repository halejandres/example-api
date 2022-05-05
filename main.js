//Importa express para utilizarlo en el proyecto
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const login = require('./routes/login');
const logro = require('./routes/logro');
const usuario = require('./routes/usuario');

//Crea una instancia de express y los asigna a app
const app = express();
//Puerto para el servidor Web
const port = process.env.PORT || 4000;

//Toda la comunicación en HTTP es a través de bytes (texto)
//Para interpretar ese texto como JSON, es necesario indicar
//que se deben procesar los request como tal.
app.use(cors());
app.use(express.json());
app.use(multer().array());

app.use('/api/login', login);
app.use('/api/logro', logro);
app.use('/api/usuario', usuario);

//Inicia el servidor Web en el puerto 3000
//Callback <- función que se ejecuta como respuesta a un evento o acción
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
});
