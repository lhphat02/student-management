import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { idHocKy, idLop, idMH } = req.query;

    if (!idHocKy || !idLop || !idMH) {
      res.status(400).json({ message: 'Missing required parameters' });
      return;
    }

    try {
      // Retrieve students from the given class and semester
      const studentsResult = await db.promise().query(
        `SELECT s.idHS, s.HoTen, sr.DiemTBMon, srd1.Diem AS coefficientScore1, srd2.Diem AS coefficientScore2
          FROM hocsinh_lop sp
          INNER JOIN hocsinh s ON sp.idHS = s.idHS
          INNER JOIN ketquamonhoc sr ON sp.idQTHoc = sr.idQTHoc
          INNER JOIN ct_hocmon srd1 ON sr.idCTHocMon = srd1.idCTHocMon AND srd1.idLHKT = 1
          INNER JOIN ct_hocmon srd2 ON sr.idCTHocMon = srd2.idCTHocMon AND srd2.idLHKT = 2
          WHERE sp.idLop = ? AND sr.idHocKy = ? AND sr.idMH = ?`,
        [idLop, idHocKy, idMH]
      );

      const students = studentsResult[0];

      // Calculate the GPA for each student
      students.forEach((student) => {
        const coefficientScore1 = student.coefficientScore1;
        const coefficientScore2 = student.coefficientScore2;
        const gpa = (coefficientScore1 * 0.33 + coefficientScore2 * 0.66) / 2;
        student.DiemTBMon = gpa.toFixed(2); // Round to 2 decimal places
      });

      res.status(200).json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving results' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
