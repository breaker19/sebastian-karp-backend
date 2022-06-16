const Productos = require('./productos.json');
const express = require("express");
const { Router } = express;
const router = Router();
const app = express();


router
.route( '/productos')

.get( (req, res) => {
    res.send(Productos);
   
}
)

.post( (req, res) => {
    const producto = {
        id: Productos.length + 1,
        name: "Producto " + (Productos.length + 1),
        price: Math.floor(Math.random() * 100) + 1,
        description: "Descripcion del producto " + (Productos.length + 1),
        image: "https://picsum.photos/200/300"
    }
    Productos.push(producto);
    res.send(producto);
}

)
.delete((req, res) => {
    const Producto = 
        Productos.splice(0, Productos.length);
        res.send(Producto);
    

}),


    router.get('/productos/:id', (req, res) => {
        const id = req.params.id;
        const producto = Productos.find(producto => producto.id == id);
        if (producto) {
            res.send(producto);
        }
    }
    )
    router.post('/productos/:id', (req, res) => {
        const id = req.params.id;
        const producto = Productos.find(producto => producto.id == id);
        if (producto) {
            res.send(producto);
        }
    })

    router.delete('/productos/:id', (req, res) => {
        const id= req.params.id;
        const producto = Productos.find(producto => producto.id == id);
        if (producto) {
            res.send(producto)
        }
    }
    )

router.post('/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = Productos.find(producto => producto.id == id);
    if (producto) {
        res.send(producto);
    }
}
)

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('ups, algo salió mal');
    next();

}
)
// router.post('/index.html', (req, res) => {
//     const agregar = req.query
//     Productos.push(agregar)
//     res.send(agregar);
//     console.log(agregar);
 
//  res.redirect("/productos");
 
//  }
//  )

module.exports = router;