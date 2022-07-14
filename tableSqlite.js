const { options } = require ("./options/sqlite3");
const knex = require("knex")(options);

knex.schema
    .createTable("productosEcommerce", table => {
    table.string("name");
    table.string("description");
    table.string("fecha");
    }).then(() => {

        console.log("table created");
    }
    ).catch((err) => {
        console.log(err);
    }
    ).finally(() => {
        knex.destroy();
    }
    );

