const inquirer = require('inquirer');
const connection = require('./connection');

function updateEmployeeData() {
  return inquirer
    .prompt([
      {
        name: 'employeeId',
        type: 'input',
        message: 'Enter the Employee ID to update:'
      },
      {
        name: 'newFirstName',
        type: 'input',
        message: 'Enter the new first name:'
      },
      {
        name: 'newLastName',
        type: 'input',
        message: 'Enter the new last name:'
      },
      {
        name: 'newRoleId',
        type: 'input',
        message: 'Enter the new Role ID:'
      }
    ])
    .then(function (answer) {
      const query = 'UPDATE employee SET first_name = ?, last_name = ?, role_id = ? WHERE id = ?';
      return connection.query(query, [answer.newFirstName, answer.newLastName, answer.newRoleId, answer.employeeId], function (err, res) {
        if (err) throw err;
        console.log(`Employee with ID ${answer.employeeId} was updated.`);
      });
    });
}

module.exports = updateEmployeeData;
