const express = require('express');

const app = express(); // ejecutamos la funcion express que devolverá un objeto

const PORT = process.env.PORT || 5001; // iniciamos la constante
// port de la manera que demanda heroku en vistas de una posible subida
// de la app en esa plataforma.

app.get('/', (req, res) => {
    res.send('Holaaaa!')
});

app.listen(PORT, () => {
    console.log('Express escuchando en puerto: ' + PORT);
})

