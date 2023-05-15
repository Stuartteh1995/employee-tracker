const getConnection = require('../../connection.js');

async function viewAllRoles() {
  try {
    const connection = getConnection();
    const query = `
    SELECT 
        r.id,
        r.title,
        r.salary,
        d.name AS department
    FROM
        role r
    LEFT JOIN 
        department d ON r.department_id = d.id
    `;

    const [rows] = await connection.query(query);
    console.table(rows);
  } catch (err) {
    console.error(err);
  }
}

module.exports = viewAllRoles;
