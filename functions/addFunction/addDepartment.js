//creates the connection to access database and to inquirer
const inquirer = require('inquirer');
const connection = require('../../connection.js');

//prompts user who selects add department 
async function addDepartment() {
  try {
    const answers = await inquirer.prompt([
      {
        name: 'id',
        type: 'input',
        message: 'Enter the Department ID'
      },
      {
        name: 'name',
        type: 'input',
        message: 'Enter the Department Name'
      }
    ]);
//inserts user input to the database
    const query = 'INSERT INTO department (id, name) VALUES (?, ?)';
//creates the connection to the database to send information 
    const conn = await connection();
    const [rows] = await conn.query(query, [answers.id, answers.name]);
    console.log(`${answers.name} was added to departments.`);
  } catch (err) {
    console.error(err);
  }
}
//exports data
module.exports = addDepartment;
