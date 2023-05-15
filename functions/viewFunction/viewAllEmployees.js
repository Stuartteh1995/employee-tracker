//create connection to access database
const getConnection = require('../../connection.js');

async function viewAllEmployees() {
  try {
    const connection = getConnection();
    //selects table from employee but also addes other information like managar and data from othe tables
    const query = `
    SELECT 
        e.id,
        e.first_name,
        e.last_name,
        r.title AS job_title,
        d.name AS department,
        r.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM 
        employee e
    LEFT JOIN 
        role r ON e.role_id = r.id
    LEFT JOIN 
        department d ON r.department_id = d.id
    LEFT JOIN 
        employee m ON e.manager_id = m.id`;

    const [rows] = await connection.query(query);
    console.table(rows);
  } catch (err) {
    console.error(err);
  }
}

//export data
module.exports = viewAllEmployees;
