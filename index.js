// Importar express
const express = require("express");
// Importar handlebars como template engine
const exphbs = require("express-handlebars");

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Crear una ruta para /
app.get("/", (req, res, next) => {
  res.render("formulario_prestamo");
});

// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});
