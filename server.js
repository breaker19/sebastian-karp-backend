const express = require("express");
const router = require("./routes.js");
const app = express();
const Products = require("./productsRoutes");
const DATA_BASE = new Products("Users/Usuario/Desktop/sebastian-karp-backend/productos");
const AllProds = DATA_BASE.getAllProducts()
app.use(express.json());
app.use("/api", router);
app.use("/api/agregar", router);
app.set("view engine", "ejs");



app.listen(8080);
console.log("Server running on port 8080");

app.get('/api/agregar', (req, res) => {
  
    res.sendFile(__dirname + '/index.html');
    console.log(AllProds);
}
)


app.post( '/agregar', async ( req, res ) =>
{
    try {
        const producto = req.body;
        const all = await DATA_BASE.getAllProducts();
        const newProd = producto;
        producto.id = all.length + 1;
        all.push(newProd);
        await DATA_BASE.createProduct(producto);
        res.send(all);
        console.log(all);
    }
    catch ( error ) {
        console.log( error )
    }
}
)






  

