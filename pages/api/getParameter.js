import db from "./db";

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       // Retrieve the semester and year information
//       const years = db.query('SELECT * FROM namhoc');

//       res.status(200).json({ years });

//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to retrieve years' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { giatri, ten } = req.body;
    await db.execute(
      `UPDATE thamso SET GiaTri = ? WHERE TenThamSo = ?`,
      [giatri, ten],
      (e, result) => {
        if(e) console.log(e)
        res.status(200).send("chinh sua thanh cong");
        res.end();
      }
    );
  }
  if (req.method === "GET") {
    db.query("SELECT * FROM thamso", (e, result) => {
      res.send(result);
      res.end();
    });
  }
}
