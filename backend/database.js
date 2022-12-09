const mysql = require("mysql2/promise");

const datasource = mysql.createPool({
    host: 'localhost',
    user: 'tibo',
    password: 'tibo1002',
    database: 'babydb',
});

module.exports = datasource;