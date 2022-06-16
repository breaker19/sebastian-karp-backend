const express = require("express");
const router = require("./routes.js");
const path  = require('path');
const nuevo = path.join(__dirname, 'views');
const Productos = require('./productos.json');
const app = express();
app.use(express.urlencoded({ extended: true }));



app.get("/agregar",( req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
}
)

app.post('/agregar', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
 req.body = req.body;
   console.log(req.body);
      Productos.push(agregar);

 
      res.send(agregar);
     
      
}
)

app.use(express.json());
app.use("/api", router);
//


app.listen(8080);
console.log("Server running on port 8080");



  

