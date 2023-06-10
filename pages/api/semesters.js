import db from './db';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       // Retrieve the semester and year information
//       const semesters = db.query('SELECT * FROM hocky');

//       res.status(200).json({ semesters });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to retrieve semesters' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

export default function handler(req, res) {
  db.query('SELECT * FROM hocky', (e, result) => {
    res.send(result);
    res.end();
  });
}
