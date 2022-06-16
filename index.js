const fs = require('fs');
const datos = JSON.parse(fs.readFileSync("./productos.json", 'utf-8'));

module.exports= class Productos

{
    constructor()
{
    this.productos = datos;
}

    getAll()
{
    return this.productos;
}


addProduct ()
{
    const producto = {
        id: datos.length + 1,
        name: "Producto " + (datos.length + 1),
        price: Math.floor(Math.random() * 100) + 1,
        description: "Descripcion del producto " + (datos.length + 1)
        

    }
    datos.push(producto);
    return producto;
}

getRandom ()
{
    const random = Math.floor(Math.random() * datos.length);
    return datos[random];
}




}






