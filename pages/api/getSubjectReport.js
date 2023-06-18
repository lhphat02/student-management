import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { idHocKy, idMH } = req.query;

    if (!idHocKy || !idMH) {
      res
        .status(400)
        .json({ message: 'Missing required parameters: idHocKy or idMH' });
      return;
    }

    try {
      console.log('Start query...');

      const results = await db.promise().query(
        `
        SELECT l.idLop, l.TenLop, l.SiSo, ct.SoLuongDat, ct.TiLe
        FROM lop l
        LEFT JOIN ct_baocaomonhoc ct ON l.idLop = ct.idLop
        JOIN baocaomonhoc b ON ct.idBCMH = b.idBCMH
        WHERE b.idHocKy = ? AND b.idMH = ?
        `,
        [idHocKy, idMH]
      );

      console.log('End query...');

      const classes = results[0];

      console.log('Result in API: ', classes);
      res.status(200).json(classes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving classes' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
