const express = require("express");
fs = require("fs");
const router = require("./routes.js");
const app = express();
const todos = require("./vistaProductos.js");
const Productos = require('./productos.json');
app.use(express.json());
app.use("/api", router);
app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(8080);
console.log("Server running on port 8080");



app.get("/", (req, res) => {
    res.render("inicio", { productos: Productos });
  });

  app.post("/agregar", (req, res) => {
    const producto = req.body;
    Productos.push(producto);
    res.redirect("/");
  });


//   app.post("/productos", (req, res) => {
//     productos.push(req.body);
//     res.redirect("/");
//   });


// const baseProductos = JSON.parse(
//     require("fs").readFileSync("./productos.json")
// )

// app.post('/agregar', (req, res) => {
// //add resultado del form a Productos y verlo en api/productos
//      baseProductos.push(req.body);
//     Productos.push(baseProductos);
//     res.send(Productos);
// console.log(baseProductos);


//  }
//  )

// app.delete("/datos/", (req, res) => {
//     Productos.splice(0, Productos.length);
//     res.render("productosPrueba", {productos: Productos});
//     res.send(Productos);
// }),




//get todos
app.get("/pruebas", (req, res) => {
    res.send(todos);
    console.log(todos);
}
)




// app.post('/agregar', (req, res) => {
//       const agregar = req.body;

// agregar.body=(path.join(__dirname, 'index.html'))
// const producto = {
//       id: Productos.id,
//       name:Productos.name,
//       price:Productos.price,
//       description:Productos.description,
//       image:Productos.image
          
// }
// Productos.push(producto);
// console.log(producto);
// }

// )





  

