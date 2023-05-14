const inquirer = require('inquirer');
const connection = require('./connection');

function addDepartment() {
    return inquirer
    .prompt([
      {
        name: 'id',
        type: 'input',
        message: 'Enter the Department ID'
      },
      {
        name: 'name',
        type: 'input',
        message: 'Enter the Department Name'}
    ])
    .then(function(answer) {
      const query = 'INSERT INTO department (id,name) VALUES (?,?)';
      return connection.query(query, [answer.id,answer.name], function(err, res) {
        if (err) throw err;
        console.log(`${answer.name} was added to departments.`);
      });
    });
}

module.exports = addDepartment;
