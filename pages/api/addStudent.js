import { createConnection } from 'mysql2/promise';

export default async function addStudent(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Extract user data from the request body
  const { HoTen, GioiTinh, NgaySinh, DiaChi, Email } = req.body;

  try {
    // Create a connection to the MySQL database
    const connection = await createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'school_management',
    });

    // Insert the user into the "users" table
    await connection.execute(
      'INSERT INTO hocsinh (HoTen, GioiTinh, NgaySinh, DiaChi, Email) VALUES (?, ?, ?, ?, ?)',
      [HoTen, GioiTinh, NgaySinh, DiaChi, Email]
    );

    // Close the database connection
    await connection.end();

    res.status(200).json({ message: 'User added successfully' });
    console.log('User added successfully');
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
    console.log(error);
  }
}
