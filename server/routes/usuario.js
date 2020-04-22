const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');


const app = express();



// get usuarios
app.get('/usuarios', function(req, res) {

    res.json("Cristian");
});

// crear usuarios

// crear usuarios
app.post('/usuarios', function(req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        password: bcrypt.hashSync(body.password, 10),
        email: body.email,
        role: body.role
    });
    app.post('/users', function(req, res) {
        res.json(req.body)
    })

    // res.json({
    //     body
    // });
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: "errors",
                err
            });
        }
        // usuarioDB.password = null;
        res.json({
            ok: true,
            usuario: usuarioDB

        });
    });

});

// modificar usuarios
app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;

    let body = req.body;

    Usuario.findById(id, body, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: "errors",
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        });
    })


});

// modificar usuarios
app.delete('/usuarios', function(req, res) {

    res.json("eliminar");
});


module.exports = app;