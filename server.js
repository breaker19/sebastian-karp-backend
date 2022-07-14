const express = require("express");
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const path = require('path')
const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const router = require("./routes.js");
const { options } = require("./options/mariaDB");
const knex = require("knex")(options);
const Productos = require('./index.js');
const jsonProductos = require('./productos.json');
const datos = new Productos();
const fs = require('fs');
const {createTable} = require('./createTable.js');
const {selectCards} = require('./selectCards.js');
const {insertCards} = require('./insertCards.js');



app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

try {
  createTable();
  insertCards();
  selectCards();
}
catch (error) {
  console.log(error);
}



const messages = [];

io.on('connection',socket => {
  console.log('Un cliente se ha conectado');
  socket.emit( 'messages', messages );
  socket.on('new-message',(data) => {
    messages.push(data);
      io.sockets.emit('messages', messages);
      console.log(data);
  });
});











app.get("/productos", (req, res) => {
  path.join(__dirname, './productos.json')

  res.render("inicio", { productos: jsonProductos });

  console.log(jsonProductos);
});


//post sincronica when the form in index.html is submitted
app.post('/productos', (req, res) => {
  const producto = {
    producto: req.body.producto,
    precio: req.body.precio,
    info: req.body.info,
  };
  datos.addProduct(producto);
  res.redirect('/productos');
}
);


//get todos
app.get("/pruebas", (req, res) => {
    res.send(todos);
    console.log(todos);
}
)

httpServer.listen(3000, function () {
  console.log("Servidor corriendo en http://localhost:3000");
});



app.get('/login', (req, res) => {
  res.render('login');

}
)

const login = {
  username: 'admin',
  password: 'admin'
}

app.get('/login', (req, res) => {
  res.render('login'); }
  )
app.post('/login', (req, res) => {
  if (login.username === 'admin' && login.password === 'admin') {
    res.redirect('/api/productos');
    console.log();
  }
  else {
    res.redirect('/');
    console.log('no admin');
  }

}
)


  app.get("/api/productos", (req, res) => {
    if (req.session.admin) {
      res.send(Productos);
    } else {
      res.send("No tienes permiso para ver esta información");
      console.log(session.admin);
    }
  }
  )

 
  for(i=0; i<jsonProductos.length; i++){
    jsonProductos[i].id = i+1;

}
app.get("/productosVisibles", (req, res) => {
    res.send(jsonProductos);
})



