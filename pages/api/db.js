import mysql from 'mysql2';

const db = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'school_management',
});

export default db;
