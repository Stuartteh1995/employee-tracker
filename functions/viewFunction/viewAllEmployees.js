const viewAllEmployees = (connection, startApp) => {
    const query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res);
      startApp();
    });
  }
  
  module.exports = viewAllEmployees;
  