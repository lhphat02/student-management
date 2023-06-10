import db from './db';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       // Retrieve the class group information
//       const classGroups = db.query('SELECT * FROM khoilop');

//       res.status(200).json({ classGroups });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to retrieve class groups' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

export default function handler(req, res) {
  db.query('SELECT * FROM khoilop', (e, result) => {
    res.send(result);
    res.end();
  });
}
