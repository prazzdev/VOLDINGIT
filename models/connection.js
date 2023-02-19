const mysql = require('mysql')

const db = mysql.createConnection({
    host: "bsrvkootqh4bl9quhuws-mysql.services.clever-cloud.com",
    user: "ubzqcgm9dofipdel",
    password: "zeVNe3NzwKeU9zo4Ddyg",
    database: "bsrvkootqh4bl9quhuws"
})

module.exports = db