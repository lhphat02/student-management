import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { idNam } = req.query;

    if (!idNam) {
      res.status(400).json({ message: 'Missing idNam parameter' });
      return;
    }

    try {
      const semesters = await db
        .promise()
        .query('SELECT * FROM hocky WHERE idNam = ?', [idNam]);
      res.status(200).json(semesters[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching semesters' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
