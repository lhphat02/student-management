import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { idLop } = req.query;

    if (!idLop) {
      res.status(400).json({ message: 'Missing required parameter: idLop' });
      return;
    }

    try {
      const results = await db.promise().query(
        `
        SELECT h.HoTen, h.GioiTinh, h.NgaySinh, h.DiaChi, h.Email, h.idHS, l.TenLop, l.idLop
        FROM hocsinh h
        JOIN hocsinh_lop hl ON h.idHS = hl.idHS
        JOIN lop l ON hl.idLop = l.idLop
        WHERE hl.idLop = ?
        `,
        [idLop]
      );

      const students = results[0];
      res.status(200).json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving students' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
