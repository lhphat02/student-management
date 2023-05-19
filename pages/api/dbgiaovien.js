import mysql from 'mysql2';
export const DBconnection = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'student_management',
});

export default function handler(req, res) {
  DBconnection.query('SELECT * FROM giaovien', (e, result) => {
    res.send(result);
  });
}
