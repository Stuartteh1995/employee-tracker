const viewAllRoles = (connection, startApp) => {
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
  connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startApp();
  });
}

module.exports = viewAllRoles;
