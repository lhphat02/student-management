import db from './db';

export default function handler(req, res) {
  db.query('SELECT * FROM loaihinhkiemtra', (e, result) => {
    res.send(result);
  });
}
