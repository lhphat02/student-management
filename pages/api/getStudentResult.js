import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { idHocKy } = req.query;

    if (!idHocKy) {
      res.status(400).json({ message: 'Missing required parameter: idHocKy' });
      return;
    }

    try {
      const results = await db.promise().query(
        `
        SELECT hs.idHS, hs.HoTen, l.idLop, l.TenLop, hl.DiemTBHK
        FROM hocsinh hs
        JOIN hocsinh_lop hl ON hs.idHS = hl.idHS
        JOIN lop l ON hl.idLop = l.idLop
        JOIN hocky hk ON l.idHocKy = hk.idHocKy
        WHERE hk.idHocKy = ?
        `,
        [idHocKy]
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
