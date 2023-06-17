import db from './db';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { idHS, idLop } = req.query;

    if (!idHS || !idLop) {
      res
        .status(400)
        .json({ message: 'Missing required parameters: idHS or idLop' });
      return;
    }

    try {
      // Delete student from study_progress table
      await db
        .promise()
        .query('DELETE FROM hocsinh_lop WHERE idHS = ? AND idLop = ?', [
          idHS,
          idLop,
        ]);

      // Delete student from students table (if desired)
      await db.promise().query('DELETE FROM hocsinh WHERE idHS = ?', [idHS]);

      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting student' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
