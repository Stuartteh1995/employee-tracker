const inquirer = require('inquirer');
const connection = require('../../connection');

function addRole(startApp) {
  return inquirer
    .prompt([
      {
        name: 'id',
        type: 'input',
        message: 'Enter the ID of the role:'
      },
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
      const query = 'INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)';
      return connection.query(query, [answer.id, answer.title, answer.salary, answer.departmentId], function(err, res) {
        if (err) throw err;
        console.log(`${answer.title} role was added.`);
        startApp()
      });
    });
}

module.exports = addRole;
