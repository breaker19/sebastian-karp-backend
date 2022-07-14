const options = {
    client: "sqlite3",
    connection: {
        filename: "./database.db3"
    },
    useNullAsDefault: true
}
module.exports = { options };