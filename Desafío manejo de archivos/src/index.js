import Contenedor from "../src/containers/container.js";

const container = new Contenedor("productos");

// container
//   .getAll()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// container
//   .save({
//     titulo: "Peron",
//     year: 1985,
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// container
//   .getById(100)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

container.deleteAll()
