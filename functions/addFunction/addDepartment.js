const inquirer = require('inquirer');
const connection = require('../../connection.js');

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

    const query = 'INSERT INTO department (id, name) VALUES (?, ?)';
    const conn = await connection();
    const [rows] = await conn.query(query, [answers.id, answers.name]);
    console.log(`${answers.name} was added to departments.`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = addDepartment;
