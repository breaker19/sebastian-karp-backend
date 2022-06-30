const fs = require('fs');
const datos = JSON.parse(fs.readFileSync("./productos.json", 'utf-8'));
const path = require('path');
 class Productos

{
    constructor()
{
    this.name = Productos.name;
    this.price = Productos.price;
}

   async  getAll()
{
 try {
    const all = JSON.parse(
        await fs.promises.readFile( `./${ this.name, this.price, this.description }.json` )
    )
    return all
} catch ( err ) {
    console.log( err )
}
}



async addProduct (id)
{
    try {
        const producto = await fs.promises.readFile( path.join(__dirname, 'productos.json') )
        const productos = JSON.parse(producto)
        productos.push(id)
        await fs.promises.writeFile( path.join(__dirname, 'productos.json'), JSON.stringify(productos) )
       .then(() => {
              console.log()
         }
         )


    } catch ( err ) {
        console.log( err )
    }
}


getRandom ()
{
    const random = Math.floor(Math.random() * datos.length);
    return datos[random];
}

}
module.exports = Productos;





