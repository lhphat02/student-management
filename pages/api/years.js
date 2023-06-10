import db from './db';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       // Retrieve the semester and year information
//       const years = db.query('SELECT * FROM namhoc');

//       res.status(200).json({ years });

//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to retrieve years' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

export default function handler(req, res) {
  db.query('SELECT * FROM namhoc', (e, result) => {
    res.send(result);
    res.end();
  });
}
