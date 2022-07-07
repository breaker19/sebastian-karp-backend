const Productos = require('./productos.json');
const express = require("express");
const { Router } = express;
const router = Router();
const path = require('path');
const fs = require('fs');
const llamadaTodos = require('./index.js');




router
.route( '/productos')

router.get("/productos/", (req , res) => {
    res.render("inicio", { productos: Productos });

}

)
//productos/:id
router.get("/productos/:id", (req , res) => {
    const id = req.params.id;
    const producto = Productos.find(producto => producto.id == id);
    res.render("producto", { producto });
}
)

//POST /api/productos asincrono 





router.get("/agregar/", (req , res) => {
    res.render("productosPrueba", {productos: Productos});

})
router.get("/agregar/:id", (req , res) => {
 res.send(req.params.id);
 console.log(req.params.id);

})



.post( (req, res) => {
let id = req.params.id - 1;
try {
    const baseProductos = JSON.parse(req.body)
    Productos.push(baseProductos);
    res.send(Productos);}

    catch (error) {
        res.send(error);
    }
}

 )
//delete by id productos
router.delete("/agregar/:id", (req, res) => {
    const id = req.params.id;
    const productos = Productos.splice(0, Productos.length);
    res.send(productos);
}
)
router.delete((req, res) => {
    const Producto = 
        Productos.splice(0, Productos.length);
        res.send(Producto);
    

}),

//eliminar al clickear en un boton por id productos 
router.delete("/productos/:id", (req, res) => {
    const id = req.params.id;
    const productos = Productos.splice(0, Productos.length);
    res.send(productos);
    res.redirect('/productos');
}
)
//add productos to cart list boton agregar id productos
router.post("/agregar/:id", (req, res) => {
    const id = req.params.id;
    const productos = Productos.splice(0, Productos.length);
    res.send(productos);
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


  //get /cart
  router.get("/cart/", (req, res) => {
    res.render("cart", { productos: Productos });})
    //get /cart/:id
    router.get("/cart/:id", (req, res) => {
        const id = req.params.id;
        const producto = Productos.find(producto => producto.id == id);
       //show product id in the cart
        res.send( { producto });
    }
    )

    //show in /cart/id with cart.ejs
    // router.get("/cart/:id", (req, res) => {
    //     const id = req.params.id;
    //     const producto = Productos.find(producto => producto.id == id);
    //     res.render("cart", { producto });
    // }
    // )




    

router.post("/cart/:id", (req, res) => {
  const id = req.params.id;
  const producto = Productos.find(producto => producto.id == id);
  if (producto) {
      res.send(producto);
  }
  else {
      res.send("No se encontró el producto");
  }
  
})







module.exports = router;