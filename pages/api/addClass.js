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
    await connection.execute(
      'INSERT INTO lop (TenLop, SiSo, idKhoiLop, idHocKy) VALUES (?, ?, ?, ?)',
      [TenLop, SiSo, idKhoiLop, idHocKy]
    );

    // Close the database connection
    await connection.end();

    res.status(200).json({ message: 'Class added successfully' });
    console.log('Class added successfully');
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
    console.log(error);
  }
}
