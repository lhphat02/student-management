import db from '../db';

export default function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case 'DELETE':
      try {
        // Delete the subject from the database
        db.query('DELETE FROM monhoc WHERE idMH = ?', [id]);
        res.status(200).json({ message: 'Subject deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete subject' });
      }
      break;
    case 'PUT':
      try {
        const { TenMH, MoTa, HeSo } = req.body;

        const query =
          'UPDATE monhoc SET TenMH = ?, MoTa = ?, HeSo = ? WHERE idMH = ?';
        const values = [TenMH, MoTa, HeSo, id];
        db.query(query, values, (error, results) => {
          res
            .status(200)
            .json({ message: 'Subject data updated successfully' });
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update subject data' });
      }
      break;
    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
