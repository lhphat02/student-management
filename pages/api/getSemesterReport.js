import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { idHocKy } = req.query;

    if (!idHocKy) {
      res.status(400).json({ message: 'Missing idHocKy parameter' });
      return;
    }

    try {
      const reports = await db
        .promise()
        .query(
          'SELECT lop.idLop, lop.TenLop, baocaohocky.SoLuongDat, baocaohocky.TiLe FROM baocaohocky LEFT JOIN lop ON baocaohocky.idLop = lop.idLop WHERE baocaohocky.idHocKy = ?',
          [idHocKy]
        );
      res.status(200).json(reports[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching classes' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
