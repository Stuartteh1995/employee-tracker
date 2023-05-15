const inquirer = require('inquirer');
const connection = require('../../connection');

function addEmployee(startApp) {
    return inquirer
    .prompt([
      {
        name: 'id',
        type: 'input',
        message: 'Enter the Employee ID?'
      },
      {
        name: 'first_name',
        type: 'input',
        message: 'Enter the Employee First Name ?'
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'Enter the Employee Last Name?'
      },
      {
        name: 'role_id',
        type: 'input',
        message: 'Enter the Role ID?'
      },
      {
        name: 'manager_id',
        type: 'input',
        message: 'Enter the Manager ID?'
      }   
    ])
    .then(function(answer) {
      const query = 'INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)';
      return connection.query(query, [answer.id, answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err, res) {
        if (err) throw err;
        console.log(`${answer.first_name} was added to Employee.`);
        startApp()
      });
    });
}

module.exports = addEmployee;
