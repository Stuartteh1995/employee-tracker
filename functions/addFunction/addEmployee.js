const inquirer = require('inquirer');
const connection = require('./connection');

function addRole() {
  return inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the role:'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for the role:'
      },
      {
        name: 'departmentId',
        type: 'input',
        message: 'Enter the department id for the role:'
      }
    ])
    .then(function(answer) {
      const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
      return connection.query(query, [answer.title, answer.salary, answer.departmentId], function(err, res) {
        if (err) throw err;
        console.log(`${answer.title} role was added.`);
      });
    });
}

module.exports = addRole;
