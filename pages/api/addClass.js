import { createConnection } from 'mysql2/promise';

export default async function addClass(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Extract user data from the request body
  const { TenLop, SiSo, idKhoiLop, idHocKy } = req.body;

  try {
    const connection = await createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'school_management',
    });

    // Insert the user into the "classes" table
    const response = await connection.execute(
      'INSERT INTO lop (TenLop, SiSo, idKhoiLop, idHocKy) VALUES (?, ?, ?, ?)',
      [TenLop, SiSo, idKhoiLop, idHocKy]
    );

    const classID = response[0].insertId;

    console.log('classID: ', classID);

    // Insert classID into "baocaohocky" table
    await connection.execute(
      'INSERT INTO baocaohocky (idLop, idHocKy) VALUES (?, ?)',
      [classID, idHocKy]
    );

    console.log('Insert classID into "baocaohocky" table: DONE');

    // Insert into "ct_baocaomonhoc" table all the classID and idBCMH that match the idHocKy of the classID got above of Lop table and idBCMH of baocaomonhoc table
    const response2 = await connection.execute(
      'SELECT idBCMH FROM baocaomonhoc WHERE idHocKy = ?',
      [idHocKy]
    );

    const idBCMHs = response2[0].map((idBCMH) => idBCMH.idBCMH);

    console.log('idBCMHs: ', idBCMHs);

    for (let i = 0; i < idBCMHs.length; i++) {
      await connection.execute(
        'INSERT INTO ct_baocaomonhoc (idLop, idBCMH) VALUES (?, ?)',
        [classID, idBCMHs[i]]
      );
    }

    console.log(
      'Insert into "ct_baocaomonhoc" table for all classIDs of matching semesterIDs in "baocaomonhoc" table of all subjectIDs: DONE'
    );

    // Close the database connection
    await connection.end();

    res.status(200).json({ message: 'Class added successfully' });
    console.log('Class added successfully');
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
}
