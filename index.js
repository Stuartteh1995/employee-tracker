const inquirer = require('inquirer');
const mysql = require('mysql2/promise');  // Make sure you import promise version

const addDepartment = require('./functions/addFunction/addDepartment.js');
const addEmployee = require('./functions/addFunction/addEmployee.js');
const addRole = require('./functions/addFunction/addRole.js');

const viewAllDepartments = require('./functions/viewFunction/viewAllDepartments.js');
const viewAllEmployees = require('./functions/viewFunction/viewAllEmployees.js');
const viewAllRoles = require('./functions/viewFunction/viewAllRoles.js');

const updateEmployeeData = require('./functions/updateFunction/updateEmployee.js');

const connection = require('./connection.js');

// Removed the connection.connect() call here

startApp();

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
            viewAllDepartments()
            .then(() => startApp())
            .catch(err => console.log(err));
            break;
          case 'View all roles':
              viewAllRoles()
              .then(() => startApp())
            .catch(err => console.log(err));
              break;
          case 'View all employees':
              viewAllEmployees()
              .then(() => startApp())
            .catch(err => console.log(err));
              break;
              case 'Add a department':
                addDepartment()
                .then(() => startApp()) 
                .catch(err => console.log(err));
                break;
              
                
             case 'Add an employee':
                  addEmployee()
                  .then(() => startApp())
                  .catch(err => console.log(err));
                  break;
              
                  case 'Add a role':
                    addRole()
                    .then(() => startApp())
                    .catch(err => console.log(err));
                    break;
                
                    case 'Update an employee role':
                      updateEmployeeData()
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
