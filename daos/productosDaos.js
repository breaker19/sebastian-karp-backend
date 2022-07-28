class Product
{
    constructor(id, nombre, precio, info, image)
    {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.info = info;
        this.image = image;
    }



    constructor()
    {
        this.productos = [];
    }
    getAll()
    {
        return this.productos;
    }
    getById(id)
    {
        return this.productos.find(producto => producto.id == id);
    }
    add(producto)
    {
        this.productos.push(producto);
    }
    delete(id)
    {
        const producto = this.productos.find(producto => producto.id == id);
        const index = this.productos.indexOf(producto);
        this.productos.splice(index, 1);
    }
    update(id, producto)
    {
        const productoActualizado = this.productos.find(producto => producto.id == id);
        const index = this.productos.indexOf(productoActualizado);
        this.productos[index] = producto;
    }
}
class ProductDAO extends Product
{
    constructor()
    {
        super();
    }
    getAll()
    {
        return super.getAll();
    }
    getById(id)
    {
        return super.getById(id);
    }
    add(producto)
    {
        super.add(producto);
    }
    delete(id)
    {
        super.delete(id);
    }
    update(id, producto)
    {
        super.update(id, producto);
    }
}
module.exports = ProductDAO;