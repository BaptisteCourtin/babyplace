const mysql = require("mysql2/promise");

const datasource = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Root44',
    database: 'babydb',
});

module.exports = datasource;