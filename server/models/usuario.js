 const mongoose = require('mongoose');
 const uniqueValidator = require('mongoose-unique-validator');



 let Squema = mongoose.Schema;


 let rolesValidos = {
     values: ['ADMIN_ROLE', 'USER_ROLE'],
     messages: '{VALUE} no es un rol válido'
 }



 let usuarioSquema = new Squema({
     nombre: {
         type: String,
         required: [true, "El nombre es necesario"]
     },

     password: {
         type: String,
         required: [true, "La contraseña es obligatoria"]
     },
     email: {
         type: String,
         unique: true,
         required: [true, "El correo es necesario"]
     },
     img: {
         type: String,
         required: false
     },
     status: {
         type: Boolean,
         default: true
     },
     role: {
         type: String,
         default: "USER_ROLE",
         enum: rolesValidos
     },
     google: {
         type: Boolean,
         required: false
     }
 });


 usuarioSquema.methods.toJSON = function() {
     let user = this;
     let userObj = user.toObject();
     delete userObj.password;
     return userObj;
 }

 // añadir el mensaje de único
 usuarioSquema.plugin(uniqueValidator, {
     message: '{PATH} debe ser único'
 });

 module.exports = mongoose.model('usuario', usuarioSquema);