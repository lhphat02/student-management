import db from '../db';

export default function handler(req, res) {
  const { method } = req;
  const { idHS } = req.query;
  switch (method) {
    case 'DELETE':
      try {
        // Delete the student from the database
        db.query('DELETE FROM hocsinh WHERE idHS = ?', [idHS]);
        res.status(200).json({ message: 'Student deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete student' });
      }
      break;
    case 'PUT':
      try {
        // Update the student data
        const { idHS, HoTen, GioiTinh, NgaySinh, DiaChi, Email } = req.body;

        console.log('idHS: ' + idHS);

        const query =
          'UPDATE hocsinh SET HoTen = ?, GioiTinh = ?, NgaySinh = ?, DiaChi = ?, Email = ? WHERE idHS = ?';
        const values = [HoTen, GioiTinh, NgaySinh, DiaChi, Email, idHS];
        db.query(query, values, (error, results) => {
          console.log('Results: ' + results);

          res
            .status(200)
            .json({ message: 'Student data updated successfully' });
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update student data' });
      }
      break;
    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
