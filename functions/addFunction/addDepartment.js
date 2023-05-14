const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('./connection');

function addDepartment() {
  return inquirer
    .prompt({
      name: 'departmentName',
      type: 'input',
      message: 'Enter the name of the department:'
    })
    .then(function(answer) {
      const query = 'INSERT INTO department (name) VALUES (?)';
      return connection.query(query, answer.departmentName, function(err, res) {
        if (err) throw err;
        console.log(`${answer.departmentName} was added to departments.`);
      });
    });
}

module.exports = addDepartment;
