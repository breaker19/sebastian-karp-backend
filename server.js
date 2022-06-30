const express = require("express");
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const router = require("./routes.js");
const path = require('path')
const app = express();
const Productos = require('./index.js');
const jsonProductos = require('./productos.json');
const datos = new Productos();
app.set("views", "./views");
app.set("view engine", "ejs");
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json());
app.use(express.static('public'))
app.use("/api", router);

const messages = [];



io.on('connection',socket => {
  console.log('Un cliente se ha conectado');


  socket.emit('messages', messages);


  socket.on('new-message',(data) => {
    messages.push(data);
      io.sockets.emit('messages', messages);
  });
});





app.get("/agregar", (req, res) => {
  path.join(__dirname, './productos.json')

  res.render("inicio", { productos: jsonProductos });
  console.log(jsonProductos);

});

// app.get('/agregar', (req, res) => {
//   res.sendFile('./public/index.html' , { root: __dirname });

// })




  app.post("/agregar",  (req, res) => {
    const producto = req.body;
    datos.addProduct(producto);
    res.redirect("/agregar");

  }
  );






//   app.post("/productos", (req, res) => {
//     productos.push(req.body);
//     res.redirect("/");
//   });



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

httpServer.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});



  

