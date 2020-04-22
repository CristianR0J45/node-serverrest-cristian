require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');


// Midelware

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

// app.get('/', function(req, res) {

//     res.json("Hola mundo");
// });


// app.post('/usuariosch', (req, res) => {
//     var body = req.body;
//     res.json({ persona: body });
//     // if (body.nombre === undefined) {
//     //     res.status(400).json({
//     //         ok: false,
//     //         mensaje: "Falta el nombre",
//     //         persona: body
//     //     })
//     // } else {
//     //     res.json({ persona: body });
//     // }
// });




mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) {
        throw err;
    }

    console.log('Conexión exitosa');
    // useNewUrlParser: true,
    // useUnifiedTopology: true

});


app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto", process.env.PORT);
});