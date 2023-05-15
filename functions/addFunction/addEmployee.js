//creates the connection to access database and to inquirer
const inquirer = require('inquirer');
const connection = require('../../connection');

//prompts user who selects add Employee 
async function addEmployee() {
  return new Promise(async (resolve, reject) => {
    try {
      const answers = await inquirer.prompt([
        {
          name: 'id',
          type: 'input',
          message: 'Enter the Employee ID?'
        },
        {
          name: 'first_name',
          type: 'input',
          message: 'Enter the Employee First Name ?'
        },
        {
          name: 'last_name',
          type: 'input',
          message: 'Enter the Employee Last Name?'
        },
        {
          name: 'role_id',
          type: 'input',
          message: 'Enter the Role ID?'
        },
        {
          name: 'manager_id',
          type: 'input',
          message: 'Enter the Manager ID?'
        }   
      ]);

      //inserts user input to the database
      const query = 'INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)';
      //creates the connection to the database to send information 
      const conn = await connection();
      const [rows] = await conn.query(query, [answers.id, answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);
      console.log(`${answers.first_name} was added to Employee.`);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

//exports data
module.exports = addEmployee;
