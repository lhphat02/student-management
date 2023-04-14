// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from 'mysql2'
export const DBconnection = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'student_management'
});


// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


export default function handler(req, res) {
  DBconnection.query("SELECT * FROM hocsinh", (e, result) =>{
    res.send(result)
  })
}

