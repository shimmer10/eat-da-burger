/***********************
 * Connections for Eat-Da-Burger
 * 
 * @author Jennifer Grace
 * 
 * 06-29-19
 ***********************/

var mysql = require('mysql');
var fs = require('fs');
require('dotenv').config();

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: process.env.DB_PASS,
    database: "burger_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;

