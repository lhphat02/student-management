import db from './db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { currentIdLop, newIdLop } = req.body;

    if (!currentIdLop || !newIdLop) {
      res.status(400).json({ message: 'Missing required parameters' });
      return;
    }

    try {
      const results = await db.promise().query(
        `
        INSERT INTO hocsinh_lop (idHS, idLop)
        SELECT hl.idHS, ? AS newIdLop
        FROM hocsinh_lop hl
        WHERE hl.idLop = ?
        `,
        [newIdLop, currentIdLop]
      );

      const affectedRows = results[0].affectedRows;
      res
        .status(200)
        .json({ message: `${affectedRows} student(s) added to the new class` });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'Error adding students to the new class' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
