import db from './db';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { idHS, idLop } = req.body;

    try {
      // Add the student to the class
      db.query('INSERT INTO hocsinh_lop (idHS, idLop) VALUES (?, ?)', [
        idHS,
        idLop,
      ]);

      res
        .status(200)
        .json({ message: 'Student added to the class successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to add student to the class' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
