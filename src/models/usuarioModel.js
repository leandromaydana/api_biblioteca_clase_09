const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  edad: Number
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
