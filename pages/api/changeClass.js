import db from './db';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { idHS, idLop, newIdLop } = req.body;

    if (!idHS || !idLop || !newIdLop) {
      res
        .status(400)
        .json({ message: 'Missing required parameters: idHS or idLop' });
      return;
    }

    try {
      // Update student in study_progress table
      await db
        .promise()
        .query(
          'UPDATE hocsinh_lop SET idLop = ? WHERE idHS = ? AND idLop = ?',
          [newIdLop, idHS, idLop]
        );

      res.status(200).json({ message: 'Student updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating student' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
