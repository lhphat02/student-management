import { createConnection } from 'mysql2/promise';
import db from './db';

export default async function addYear(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Extract user data from the request body
  const { Namhoc } = req.body;

  try {
    // Create a connection to the MySQL database
    const connection = await createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'school_management',
    });

    // Insert the user into the "year" table
    // await connection.execute('INSERT INTO namhoc ( Namhoc ) VALUES ( ? )', [
    //   Namhoc,
    // ]);

    const yearResult = await db
      .promise()
      .query('INSERT INTO namhoc (Namhoc) VALUES (?)', [Namhoc]);
    const yearId = yearResult[0].insertId;

    // Insert semesters for the new year
    const semester1Result = await db
      .promise()
      .query('INSERT INTO hocky (HocKy, idNam) VALUES (?, ?)', ['1', yearId]);
    const semester1Id = semester1Result[0].insertId;

    const semester2Result = await db
      .promise()
      .query('INSERT INTO hocky (HocKy, idNam) VALUES (?, ?)', ['2', yearId]);
    const semester2Id = semester2Result[0].insertId;

    res.status(201).json({ yearId, semester1Id, semester2Id });
    console.log('New study year added successfully');
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
    console.log(error);
  }
}
