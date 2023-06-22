import db from './db';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { idLop } = req.query;

    if (!idLop) {
      res.status(400).json({ message: 'Missing required parameters: idLop' });
      return;
    }

    try {
      // Delete class from baocaohocky table (if desired)
      await db
        .promise()
        .query('DELETE FROM baocaohocky WHERE idLop = ?', [idLop]);

      // Delete class from ct_bcmh table (if desired)
      await db
        .promise()
        .query('DELETE FROM ct_baocaomonhoc WHERE idLop = ?', [idLop]);

      // Delete student from study_progress table
      await db.promise().query('DELETE FROM lop WHERE idLop = ?', [idLop]);

      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting student' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
