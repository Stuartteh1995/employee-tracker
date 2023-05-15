//creates the connection to access database and to inquirer
const inquirer = require('inquirer');
const connection = require('../../connection');

//prompts user who selects add department 
async function updateEmployeeData() {
  //waits for the prompt to end before returning data
  return new Promise(async (resolve, reject) => {
    try {
      const answers = await inquirer.prompt([
        {
          name: 'employeeId',
          type: 'input',
          message: 'Enter the Employee ID to update:'
        },
        {
          name: 'newFirstName',
          type: 'input',
          message: 'Enter the new first name:'
        },
        {
          name: 'newLastName',
          type: 'input',
          message: 'Enter the new last name:'
        },
        {
          name: 'newRoleId',
          type: 'input',
          message: 'Enter the new Role ID:'
        }
      ]);
//updates database
      const query = 'UPDATE employee SET first_name = ?, last_name = ?, role_id = ? WHERE id = ?';
      //creates the connection to the database to send information 
      const conn = await connection ();
      const [rows] = await conn.query(query, [answers.newFirstName, answers.newLastName, answers.newRoleId, answers.employeeId]);
      console.log(`Employee with ID ${answer.employeeId} was updated.`);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}
//exports data
module.exports = updateEmployeeData;
