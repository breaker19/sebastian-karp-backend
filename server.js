const express = require("express");
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const path = require('path')
const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const router = require("./routes.js");

const Productos = require('./index.js');
const jsonProductos = require('./productos.json');
const datos = new Productos();
const fs = require('fs');

app.set("views", "./views");
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

const messages = [
    {
        id: 1,
        name: Productos.name,
        price:  Productos.price,
        info: Productos.description
    }


];

io.on('connection',socket => {
  console.log('Un cliente se ha conectado');


  socket.emit( 'messages', messages );




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


//post sincronica when the form in index.html is submitted
app.post('/agregar', (req, res) => {
  const producto = {
    producto: req.body.producto,
    precio: req.body.precio,
    info: req.body.info,
  };
  datos.addProduct(producto);
  res.redirect('/agregar');
}
);


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



app.get('/login', (req, res) => {
  res.render('login');

}
)
//if username is "admin" and password is "admin" redirect to /api/productos else redirect to /

const login = {
  username: 'admin',
  password: 'admin'
}

app.get('/login', (req, res) => {
 //if form is submitted redirect to /api/productos else redirect to / req login.ejs
  

  
}
)
app.post('/login', (req, res) => {
  if (login.username === 'admin' && login.password === 'admin') {
    res.redirect('/api/productos');
    console.log('admin post');
  }
  else {
    res.redirect('/');
    console.log('no admin');
  }

}
)

  




  //bloquear acceso a /api/productos si no es admin 
  app.get("/api/productos", (req, res) => {
    if (req.session.admin) {
      res.send(Productos);
    } else {
      res.send("No tienes permiso para ver esta información");
      console.log(session.admin);
    }
  }
  )





