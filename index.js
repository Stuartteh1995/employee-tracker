const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'myDatabase'
});

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
            viewAllDepartments();
            break;
          case 'View all roles':
            viewAllRoles();
            break;
          case 'View all employees':
            viewAllEmployees();
            break;
          case 'Add a department':
            addDepartment();
            break;
          case 'Add a role':
            addRole();
            break;
          case 'Add an employee':
            addEmployee();
            break;
          case 'Update an employee role':
            updateEmployeeRole();
            break;
          case 'Exit':
            connection.end();
            break;
        }
      });
  }

  function viewAllDepartments() {
    const query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startApp();
    });
  }
  function addDepartment() {
    inquirer
      .prompt({
        name: 'departmentName',
        type: 'input',
        message: 'Enter the name of the department:'
      })
      .then(function(answer) {
        const query = 'INSERT INTO department (name) VALUES (?)';
        connection.query(query, answer.departmentName, function(err, res) {
          if (err) throw err;
          console.log(`${answer.departmentName} was added to departments.`);
          startApp();
        });
      });
  }
    