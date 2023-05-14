const inquirer = require('inquirer');
const connection = require('./connection');

function addRole() {
    return inquirer
    .prompt([
      {
        name: 'id',
        type: 'input',
        message: 'Enter the Role ID'
      },
      {
        name: 'title',
        type: 'input',
        message: 'Enter the Role Title'},
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the Salary'},
            {
                name: 'department_id',
                type: 'input',
                message: 'Enter the Department ID'}
            
    ])
    .then(function(answer) {
      const query = 'INSERT INTO department (name) VALUES (?)';
      return connection.query(query, answer.departmentName, function(err, res) {
        if (err) throw err;
        console.log(`${answer.departmentName} was added to departments.`);
      });
    });
}

module.exports = addDepartment;
