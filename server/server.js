const puerto = require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Midelware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function(req, res) {

    res.json("Hola mundo");
});

// get usuarios
app.get('/usuarios', function(req, res) {

    res.json("Cristian");
});

// crear usuarios
app.post('/usuarios', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "Falta el nombre",
            err: "No fue posible registrar"
        })
    } else {
        res.json({ persona: body });
    }
});

// modificar usuarios
app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    });
});

// modificar usuarios
app.delete('/usuarios', function(req, res) {

    res.json("eliminar");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto", process.env.PORT);
});