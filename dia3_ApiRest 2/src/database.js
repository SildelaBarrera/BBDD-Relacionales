const mysql = require("mysql2");

let connection = mysql.createConnection(
    { 
    host: "localhost",
    user: "root",
    password: "My5qls3rv3r0723.",
    database: "colegio",
    waitForConnections: true,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0
    }).promise();

console.log("Conexión con la BBDD creada")

module.exports = {connection}