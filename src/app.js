const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");
require('dotenv').config();

const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());

const librosRouter = require("./routes/libros");
const usuariosRouter = require("./routes/usuario"); // Agregar esta línea

app.use("/api/libros", autenticacion, librosRouter);
app.use("/api/usuarios", autenticacion, usuariosRouter); // Agregar esta línea

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app;
