import fs from 'fs';

const datos = JSON.parse(fs.readFileSync("./productos.json", 'utf-8'));
const productosJson = "productos.json";
// console.log(datos);


// const crearArchivo = (lista) => {
//     let data = '';
//     lista.forEach(producto => {
//         data += `${producto.id},${producto.nombre},${producto.precio}\n`;
//     });
//     fs.writeFile('./Listado.txt', data, (err) => {
//         if (err) throw err;
//         console.log('Archivo creado');
//     });
// }
// crearArchivo(datos);


const deleteById = datos.filter(producto => producto.id !== 3)
// console.log("hola", deleteById);
fs.writeFileSync("./listaDos.txt", JSON.stringify(deleteById));


const deleteByName = datos.filter(producto => producto.nombre !== 'Globo Terráqueo')
// console.log("hola", deleteByName);
fs.writeFileSync("./listaTres.txt", JSON.stringify(deleteByName));




class Productos
{
    constructor(productos)
    {
        this.productos = productos;
    }
    async write ( params )
    {
      const nuevoProducto = JSON.stringify( params, null, 2 )
      await fs.promises.writeFile(  "./productos.json", nuevoProducto, 'utf8' );
    }

async  save(obj)
{    try{
        const guardar = JSON.parse(await fs.promises.readFile('./productos.json', 'utf-8'));
        const productosArray = guardar;
        productosArray.push(obj);
        let id = 0;
        productosArray.forEach(element => {
            if(element.id > id)
            {
                id = element.id;
            }
        });
        obj.id = id + 1;
        await fs.promises.writeFile(productosJson, JSON.stringify(productosArray));
        console.log("guardado");

  
}
catch(error)
{
    console.log(error);
}
}

async getById(idNumber)
{
    try{
        const obtener = JSON.parse(await fs.promises.readFile(productosJson, 
            'utf-8'));
        this.productosArray = obtener;
        const producto = this.productosArray.find(element => element.id == idNumber);
       if( producto) {
        // console.log("el producto", producto);
        return producto;
       }
         else{
              console.log("no existe");
            }

       
    }
    catch(error)
    {
        console.log(error);
    }
}

async deleteById(id)
{
    try{
        const eliminar = JSON.parse(await fs.promises.readFile(productosJson, 'utf-8'));
        const productosArray = eliminar;
        const producto = productosArray.find(element => element.id == id);
        if(producto)
        {
            productosArray.splice(productosArray.indexOf(producto), 1);
            await fs.promises.writeFile(productosJson, JSON.stringify(shop));
            // console.log("producto eliminado");
        }
        else
        {
            console.log("no existe");
        }
    }
    catch(error)
    {
        console.log(error);
    }
}




async  sobrescribir(){
    try{
        const sobrescribir = JSON.parse(await fs.promises.readFile(productosJson, 'utf-8'));
        const productosArray = sobrescribir;
        productosArray[0].name = "Globo Teráqueo";
        productosArray[0].price = "100";
        await fs.promises.writeFile(productosJson, JSON.stringify(productosArray));
    }
    catch(error)
    {
        console.log(error);
    }
  
}
async getAll ()
{
  const data = await fs.promises.readFile( productosJson);
  const productos = JSON.parse( data )
  if ( productos.length ) {
    const todosLosProductos = productos.map( ( producto ) => producto )
    console.log( todosLosProductos )
  } else {
    console.log( 'No hay productos' )
  }
}

async nuevosProductos ()
{
  try {
    const data = await fs.promises.readFile( productosJson, 'utf8' )
    this.productosArray = JSON.parse( data )
    const newProductTxt = fs.promises.writeFile( './productos.txt', JSON.stringify( this.productosArray, null, 2 ) )
    return newProductTxt;

  } catch ( err ) {
    console.log( err )
  }
}


}




const products = new Productos(datos);

 const producto1=
    {
        id: 1,
        nombre: 'Globo Teráqueo',
        precio: '100'
    }
    const producto2=
    {
        id: 2,
        nombre: 'Globo de colores',
        precio: '200'
    }
    await products.save(producto1);
    await products.save(producto2);
    await products.nuevosProductos();
    await products.getAll();
    await products.getById(1);
    await products.deleteById(1);
    await products.sobrescribir();
    
    
    
    products.save()
    .then(() => {
        console.log("Producto guardado");
    })
    .catch(error => {
        console.log(error);
    }
    );
    products.sobrescribir()
    .then(() => {
        console.log("sobrescrito");
    }
    )
    .catch(error => {
        console.log(error);
    }
    );
    products.getAll()
    .then(() => {
        console.log("productos", products);
    }
    )
    .catch(error => {
        console.log(error);
    }
    );

    





