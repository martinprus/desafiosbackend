import Contenedor from "./src/containers/container.js";
const container = new Contenedor("productos");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

import express from "express";
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor en express en el puerto ${server.address().port}`);
});

server.on("error", (err) => console.log(`Error en el servidor ${err.message}`));

app.get("/", (req, res) => {
  res.send(`<h1>Elija la ruta /productos o /productoRandom</h1>`);
});

app.get("/productos", (req, res) => {
  container
    .getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/productoRandom", (req, res) => {
  let idRandom = getRandomInt(4) + 1;
  container
    .getById(idRandom)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
