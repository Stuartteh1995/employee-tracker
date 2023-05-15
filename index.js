//access the npms
const inquirer = require('inquirer');
const mysql = require('mysql2/promise'); 

//access data from other files
const addDepartment = require('./functions/addFunction/addDepartment.js');
const addEmployee = require('./functions/addFunction/addEmployee.js');
const addRole = require('./functions/addFunction/addRole.js');


const viewAllDepartments = require('./functions/viewFunction/viewAllDepartments.js');
const viewAllEmployees = require('./functions/viewFunction/viewAllEmployees.js');
const viewAllRoles = require('./functions/viewFunction/viewAllRoles.js');

const updateEmployeeData = require('./functions/updateFunction/updateEmployee.js');

const connection = require('./connection.js');

//lauches the app
startApp();


function startApp() {
  //prompts the user to pick what they want to do
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
      //once they select what they want to do the function is than run for the selected function
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
            //user exits the application 
          case 'Exit':
              connection.end();
              break;
        }
      });
  }

  //export function 
  module.exports = startApp;
