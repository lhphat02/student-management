// get the client
const mysql = require('mysql2');

// create the connection to database
export const DBconnection = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: ''
});