import db from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { idLop, idMH } = req.query;

    if (!idLop || !idMH) {
      res.status(400).json({ message: 'Missing required parameters' });
      return;
    }

    console.log('idLop o api: ', idLop);
    console.log('idMH o api: ', idMH);

    try {
      // Retrieve students from the given class and semester
      const studentsResult = await db.promise().query(
        `SELECT hl.idHS, h.HoTen, l.TenLop, kqhm.DiemTBMon, ct1.Diem AS DiemHS1, ct2.Diem AS DiemHS2
        FROM hocsinh_lop hl
        JOIN hocsinh h ON hl.idHS = h.idHS
        JOIN lop l ON hl.idLop = l.idLop
        LEFT JOIN ketquahocmon kqhm ON hl.idQTHoc = kqhm.idQTHoc
        LEFT JOIN ct_hocmon ct1 ON kqhm.idQTHoc = ct1.idQTHoc AND kqhm.idMH = ct1.idMH AND ct1.idLHKT = 1
        LEFT JOIN ct_hocmon ct2 ON kqhm.idQTHoc = ct2.idQTHoc AND kqhm.idMH = ct2.idMH AND ct2.idLHKT = 2
        WHERE hl.idLop = ? AND (kqhm.idMH = ? OR kqhm.idMH IS NULL)`,
        [idLop, idMH]
      );

      const students = studentsResult[0];

      // Calculate the GPA for each student
      students.forEach((student) => {
        const DiemHS1 = student.DiemHS1;
        const DiemHS2 = student.DiemHS2;
        const gpa = (DiemHS1 + DiemHS2 * 2) / 3;
        student.DiemTBMon = gpa.toFixed(2); // Round to 2 decimal places
      });

      console.log('student list in subject result api: ', students);

      res.status(200).json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving results' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
