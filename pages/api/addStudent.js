import db from './db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { HoTen, GioiTinh, NgaySinh, DiaChi, Email, idLop } = req.body;

    console.log(req.body);

    if (!HoTen || !GioiTinh || !NgaySinh || !DiaChi || !Email || !idLop) {
      res.status(400).json({ message: 'Missing required parameters' });
      return;
    }

    try {
      // Insert student into student table
      const studentInsertResult = await db.promise().query(
        `INSERT INTO hocsinh (HoTen, GioiTinh, NgaySinh, DiaChi, Email)
        VALUES (?, ?, ?, ?, ?)`,
        [HoTen, GioiTinh, NgaySinh, DiaChi, Email]
      );

      //Get the id of the inserted student
      const studentId = studentInsertResult[0].insertId;

      // Insert student into study_progress table
      await db.promise().query(
        `INSERT INTO hocsinh_lop (idHS, idLop)
        VALUES (?, ?)`,
        [studentId, idLop]
      );

      res.status(201).json({ message: 'Student added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.sqlMessage || 'Error adding student');
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
