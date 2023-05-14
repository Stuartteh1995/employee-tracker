const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myDatabase'
});

connection.connect(function(err) {
  if (err) throw err;
  startApp();
});
