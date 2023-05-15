const getConnection = require('../../connection.js');

async function viewAllDepartments() {
  try {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * FROM department');
    console.table(rows);
  } catch (err) {
    console.error(err);
  }
}

module.exports = viewAllDepartments;
