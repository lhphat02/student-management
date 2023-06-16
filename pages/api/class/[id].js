import db from '../db';

export default function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case 'DELETE':
      try {
        // Delete the class from the database
        db.query('DELETE FROM lop WHERE idLop = ?', [id]);
        res.status(200).json({ message: 'Class deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete class' });
      }
      break;
    case 'PUT':
      try {
        const { TenLop } = req.body;

        const query = 'UPDATE lop SET TenLop = ? WHERE idLop = ?';
        const values = [TenLop, id];
        db.query(query, values, (error, results) => {
          res.status(200).json({ message: 'Class data updated successfully' });
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update class data' });
      }
      break;
    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
