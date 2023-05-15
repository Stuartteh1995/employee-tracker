const inquirer = require('inquirer');
const mysql = require('mysql2');

const addDepartment = require('./functions/addFunction/addDepartment.js');
const addEmployee = require('./functions/addFunction/addEmployee.js');
const addRole = require('./functions/addFunction/addRole.js');

const viewAllDepartments = require('./functions/viewFunction/viewAllDepartments.js');
const viewAllEmployees = require('./functions/viewFunction/viewAllEmployees.js');
const viewAllRoles = require('./functions/viewFunction/viewAllRoles.js');

const updateEmployeeData = require('./functions/updateFunction/updateEmployee.js');


const connection = require('./connection.js');

connection.connect(function(err) {
  if (err) throw err;
  startApp();
});

function startApp() {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
          case 'View all departments':
              viewAllDepartments(connection, startApp);
              break;
          case 'View all roles':
              viewAllRoles(connection, startApp);
              break;
          case 'View all employees':
              viewAllEmployees(connection, startApp);
              break;
          case 'Add a department':
              addDepartment(connection, startApp)
              .then(() => startApp())
              .catch(err => console.log(err));
              break;
          case 'Add a role':
              addRole(connection, startApp)
              .then(() => startApp())
              .catch(err => console.log(err));
              break;
          case 'Add an employee':
              addEmployee(connection, startApp)
              .then(() => startApp())
              .catch(err => console.log(err));
              break;
          case 'Update an employee role':
              updateEmployeeData(connection, startApp)
              .then(() => startApp())
              .catch(err => console.log(err));
              break;
          case 'Exit':
              connection.end();
              break;
        }
      });
  }
  module.exports = startApp;