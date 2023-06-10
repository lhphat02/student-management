import db from './db';

export default function handler(req, res) {
  db.query('SELECT * FROM hocsinh', (e, result) => {
    res.send(result);
    res.end();
  });
}
