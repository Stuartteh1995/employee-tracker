const viewAllDepartments = (connection, startApp) => {
    const query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res);
      startApp();
    });
  }
  
  module.exports = viewAllDepartments;
  