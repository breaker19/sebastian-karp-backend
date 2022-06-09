import fs from 'fs';
const datos = JSON.parse(fs.readFileSync("./productos.json", 'utf-8'));

export class Productos


{

getAll ()
{

    return datos;

    
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

        


    export default Productos;





