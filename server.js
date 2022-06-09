import express from 'express';
import Productos from './index.js'

export class Server
{
  constructor ()
  {
    this.app = express();
    this.port = 8080
    this.routes()
    this.listen()
    this.productos = new Productos()
  }

  routes ()
  {
    this.app.get( '/', ( req, res ) =>
    {
      const prueba = async () =>
      {
        const prod = this.productos.getAll()
        res.send( prod )
      }
      prueba()
    } )

    this.app.get( '/nuevo', ( req, res ) =>
      {
         const prueba = async () =>
         {
            const prod = this.productos.addProduct()
            res.send( prod )
         }
         prueba()
         }
      )
      this.app.get( '/random', ( req, res ) =>
      {
         const prueba = async () =>
         {
            const prod = this.productos.getRandom()
            res.send( prod )
         }
         prueba()
         }
      )
  }
  listen ()
  {
    this.app.listen( this.port, () =>
    {
      console.log( 'corriendo en el puerto ', this.port )
    } )
  }

}
const server = new Server();