const viewAllRoles = (connection, startApp) => {
    const query = 'SELECT * FROM role';
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res);
      startApp();
    });
  }
  
  module.exports = viewAllRoles;
  