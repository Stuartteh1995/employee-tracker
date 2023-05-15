const inquirer = require('inquirer');
const connection = require('../../connection');
const startApp = require('../../index');

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
    return connection.query(query, [answer.id,answer.name])
    .then(function(res) {
      console.log(`${answer.name} was added to departments.`);
      startApp()
    })
    .catch(function(err) {
      throw err;
    });
  });
}


module.exports = addDepartment;
