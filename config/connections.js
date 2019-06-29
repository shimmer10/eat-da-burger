/***********************
 * Connections for Eat-Da-Burger
 * 
 * @author Jennifer Grace
 * 
 * 06-29-19
 ***********************/

 var mysql = require('mysql');
 var fs = require('fs');

 // read the file for the password
 fs.readFile('password.txt', function read(err, data) {
     if (err) {
         throw err;
     }
     password = data.toString();
     createInfoToConnect(password)
 });
 
 // create the connection information for the sql database
 function createInfoToConnect(password) {
     connection = mysql.createConnection({
         host: "localhost",
 
         port: 3306,
 
         user: "root",
 
         password: password,
         database: "burgers_db"
     });
     connect(connection);
 }
 
 
 // connect to the mysql server and sql database
 function connect(connection) {
    connection.connect(function(err) {
        if (err) {
          console.error("error connecting: " + err.stack);
          return;
        }
        console.log("connected as id " + connection.threadId);
      });
 }

 module.exports = connection;

