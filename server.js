const express = require("express");
const router = require("./routes.js");
const path  = require('path');
const nuevo = path.join(__dirname, 'views');
const app = express();
app.use(express.urlencoded({ extended: true }));

const agregar = [];

app.get("/agregar",( req, res) => {

  req.get(   "index.html", {root : nuevo});
   res.sendFile(path.join(__dirname, 'index.html'));
}
)

app.post('api/productos', (req, res) => {
agregar.push(req.query)
res.send(agregar);
redirect('/agregar');
      
}
)

app.use(express.json());
app.use("/api", router);
//


app.listen(8080);
console.log("Server running on port 8080");



  

