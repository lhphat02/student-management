import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { idHocKy, idKhoiLop } = req.query;

    if (!idHocKy || !idKhoiLop) {
      res
        .status(400)
        .json({ message: 'Missing semesterId or classGroupId parameter' });
      return;
    }

    try {
      const classes = await db
        .promise()
        .query('SELECT * FROM lop WHERE idHocKy = ? AND idKhoiLop = ?', [
          idHocKy,
          idKhoiLop,
        ]);
      res.status(200).json(classes[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching classes' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
