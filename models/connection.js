const mysql = require('mysql')

const db = mysql.createConnection({
    host: "bsrvkootqh4bl9quhuws-mysql.services.clever-cloud.com",
    user: "ubzqcgm9dofipdel",
    password: "zeVNe3NzwKeU9zo4Ddyg",
    database: "bsrvkoepiz_31497959_kfmotqh4bl9quhuws"
})

module.exports = db