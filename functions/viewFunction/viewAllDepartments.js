//create connection to access database
const getConnection = require('../../connection.js');

async function viewAllDepartments() {
  try {
    const connection = getConnection();
    //selectes table 
    const [rows] = await connection.query('SELECT * FROM department');
    console.table(rows);
  } catch (err) {
    console.error(err);
  }
}

//exports data
module.exports = viewAllDepartments;
