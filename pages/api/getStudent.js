import db from './db';

export default function handler(req, res) {
  const query = `
    SELECT h.*, l.TenLop
    FROM hocsinh h
    LEFT JOIN hocsinh_lop hl ON h.idHS = hl.idHS
    LEFT JOIN lop l ON hl.idLop = l.idLop
    WHERE l.TenLop IS NULL OR l.TenLop IS NOT NULL
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error retrieving student data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
}
