const fs = require('fs');

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "admin",
//     port: "3306",
//     database: "trainerdb"
// });

connection.connect();

module.exports = connection;