import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const classGroups = await db.promise().query('SELECT * FROM khoilop');
      res.status(200).json(classGroups[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching class groups' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
