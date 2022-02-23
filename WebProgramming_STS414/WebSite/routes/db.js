const mysql = require(`mysql`);
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "backend"
});

connection.connect(function(err) {
    if (!err) { console.log(`Connected`); } else { console.log(err); }
});


let sql = "CREATE TABLE IF NOT EXISTS users(id INT PRIMARY KEY AUTO_INCREMENT, fname VARCHAR(255), lname VARCHAR(255), number VARCHAR(255), city VARCHAR(255), uname VARCHAR(255), email VARCHAR(255), pass VARCHAR(255))";

connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("User Table Created");
});

sql = "CREATE TABLE IF NOT EXISTS admins(adminID INT PRIMARY KEY AUTO_INCREMENT, fname VARCHAR(255), lname VARCHAR(255), uname VARCHAR(255), email VARCHAR(255), pass VARCHAR(255))";

connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Admin Table Created");
});

sql = "CREATE TABLE IF NOT EXISTS projects(projectID INT PRIMARY KEY AUTO_INCREMENT, user VARCHAR(255), projectName VARCHAR(255), projectSummary VARCHAR(300), projectFund INT, isFunded BOOLEAN DEFAULT FALSE)";

connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Project Table Created");
});

sql = "CREATE TABLE IF NOT EXISTS support(supportID INT PRIMARY KEY AUTO_INCREMENT, fname VARCHAR(255), lname VARCHAR(255), email VARCHAR(255), projectName VARCHAR(255), queries VARCHAR(255))";

connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Support Table Created");
});

module.exports = connection;