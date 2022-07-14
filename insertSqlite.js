const { options } = require ("./options/sqlite3");
const knex = require("knex")(options);
const main = require("./public/main.js")
knex("productosEcommerce")
  .insert(main)
  
  .then(() => {
    console.log("los datos se han insertado");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });