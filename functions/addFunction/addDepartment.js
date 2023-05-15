
const inquirer = require('inquirer');
const connection = require('../../connection');

async function addDepartment() {
  return new Promise(async (resolve, reject) => {
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
      const conn = await connection;
      const [rows] = await conn.query(query, [answers.id, answers.name]);
      console.log(`${answers.name} was added to departments.`);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}
module.exports = addDepartment;
