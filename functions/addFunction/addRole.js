const inquirer = require('inquirer');
const connection = require('../../connection');

async function addRole() {
  return new Promise(async (resolve, reject) => {
    try {
      const answers = await inquirer.prompt([
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
      ]);

      const query = 'INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)';
      const conn = await connection();
      const [rows] = await conn.query(query, [answers.id, answers.title, answers.salary, answers.departmentId]);
      console.log(`${answers.title} role was added.`);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = addRole;
