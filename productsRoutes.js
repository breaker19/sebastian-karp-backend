const fs = require( 'fs' )
class Products
{
  constructor ( name )
  {
    this.name = name;
  }
  async getAllProducts ()
  {
    try {
      const all = JSON.parse(
        await fs.promises.readFile( `/${ this.name }.json` )
      )
      return all
    } catch ( err ) {
      console.log( err )
    }
  }
  async createProduct ( objProd )
  {
    try {
      const all = await this.getAllProducts()
      const newProd = objProd
      objProd.id = all.length + 1
      all.push( newProd )
      await fs.promises.writeFile(
        `src/data/${ this.name }.json`,
        JSON.stringify( all )
      )
      return all
    } catch ( error ) {
      console.log( error )
    }
  }
}
module.exports = Products