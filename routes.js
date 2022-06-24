const Productos = require('./productos.json');
const express = require("express");
const { Router } = express;
const router = Router();
const app = express();

const productosPrueba = []


router
.route( '/productos')

router.get("/productos/", (req , res) => {
    res.render("productosPrueba", {productos: Productos});

})
// router.get("/agregar/", (req , res) => {
//     res.render("productosPrueba", {productos: Productos});

// })



// .post( (req, res) => {
// let id = req.params.id - 1;
// try {
//     const baseProductos = JSON.parse(req.body)
//     Productos.push(baseProductos);
//     res.send(Productos);}

//     catch (error) {
//         res.send(error);
//     }
// }

// )
.delete((req, res) => {
    const Producto = 
        Productos.splice(0, Productos.length);
        res.send(Producto);
    

}),




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
        res.send( producto);
    }
}
)

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('ups, algo salió mal');
    next(err);

}
)

//update producto
router.put('/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = Productos.find(producto => producto.id == id);
    if (producto) {
        producto.name = "producto renombrado";
        producto.price = 200;
        producto.description = "descripcion nueva";
        producto.image = req.body.image;
        res.send(producto);

    }
}
)



module.exports = router;