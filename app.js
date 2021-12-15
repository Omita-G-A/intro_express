const express = require("express");
const app = express(); // ejecutamos la funcion express que devolverá un objeto

app.get("/", (req, res) => {
  // res.send('<h1>Inicio</h1>') // express, con send, ya nos escribe las cabeceras, con su status
  // 200 por defecto, etc.
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send('<h1>Sobre nosotros</h1>') // express, con send, ya nos escribe las cabeceras, con su status
  // 200 por defecto, etc.
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});

const PORT = process.env.PORT || 5000; // iniciamos la constante
// port de la manera que demanda heroku en vistas de una posible subida
// de la app en esa plataforma.

app.listen(PORT, () => {
  console.log("Express escuchando en puerto: " + PORT);
});
