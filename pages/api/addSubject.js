import { createConnection } from 'mysql2/promise';

export default async function addSubject(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Extract user data from the request body
  const { TenMH, MoTa, HeSo } = req.body;

  try {
    // Create a connection to the MySQL database
    const connection = await createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'school_management',
    });

    // Insert the user into the "subject" table
    await connection.execute(
      'INSERT INTO monhoc (TenMH, MoTa, HeSo) VALUES (?, ?, ?)',
      [TenMH, MoTa, HeSo]
    );

    // Close the database connection
    await connection.end();

    res.status(200).json({ message: 'Subject added successfully' });
    console.log('Subject added successfully');
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
    console.log(error);
  }
}
