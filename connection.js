//create a const for connection information to access the database
const mysql = require('mysql2/promise');

let connection;

async function initializeConnection() {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_tracker_db'
  });
}

initializeConnection().catch(err => console.error(err));

module.exports = () => connection;
