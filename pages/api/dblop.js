import db from './db';

export default function handler(req, res) {
  db.query('SELECT * FROM lop', (e, result) => {
    res.send(result);
    res.end();
  });
}
