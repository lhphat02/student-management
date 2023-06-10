import db from '../db';

export default function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case 'DELETE':
      try {
        // Delete the student from the database
        db.query('DELETE FROM hocsinh WHERE idHS = ?', [id]);
        res.status(200).json({ message: 'Student deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete student' });
      }
      break;
    case 'PUT':
      try {
        const { HoTen, GioiTinh, NgaySinh, DiaChi, Email } = req.body;

        const query =
          'UPDATE hocsinh SET HoTen = ?, GioiTinh = ?, NgaySinh = ?, DiaChi = ?, Email = ? WHERE idHS = ?';
        const values = [HoTen, GioiTinh, NgaySinh, DiaChi, Email, id];
        db.query(query, values, (error, results) => {
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

  // if (req.method === 'PUT') {
  //   const { idHS, HoTen, GioiTinh, NgaySinh, DiaChi, Email } = req.body;

  //   const query =
  //     'UPDATE hocsinh SET HoTen = ?, GioiTinh = ?, NgaySinh = ?, DiaChi = ?, Email = ? WHERE idHS = ?';
  //   const values = [HoTen, GioiTinh, NgaySinh, DiaChi, Email, id];

  //   db.query(query, values, (error, results) => {
  //     if (error) {
  //       console.error(error);
  //       res.status(500).json({ message: 'Failed to update student data' });
  //     } else {
  //       res.status(200).json({ message: 'Student data updated successfully' });
  //     }
  //   });
  // } else {
  //   res.status(405).json({ message: 'Method Not Allowed' });
  // }
}
