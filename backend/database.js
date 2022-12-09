const mysql = require("mysql2/promise");

const datasource = mysql.createPool({
    host: 'localhost',
    user: '',
    password: '',
    database: 'babydb',
});

module.exports = datasource;
