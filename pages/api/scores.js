import db from './db';

export default async (req, res) => {
  const { idHS, idLop, idMH, Diem, LHKT } = req.body;

  try {
    console.log('Begin API scores.js \n');

    console.log('Step fetch idQTHocValue: START');

    const idQTHoc = await db.promise().query(
      `SELECT hl.idQTHoc
      FROM hocsinh_lop hl
      WHERE idHS = ${idHS} AND idLop = ${idLop}`
    );

    const idQTHocValue = idQTHoc[0][0].idQTHoc;

    console.log('Step fetch idQTHocValue: DONE');
    console.log('idQTHoc in API: ', idQTHocValue, '\n');

    console.log('Checking if data existed in ct_hocmon... \n');

    const checkIfExistInCTHocMon = await db.promise().query(
      `SELECT *
        FROM ct_hocmon
        WHERE idQTHoc = ${idQTHocValue} AND idMH = ${idMH} AND idLHKT = ${LHKT}`
    );

    console.log('Checking: DONE');

    if (checkIfExistInCTHocMon[0].length !== 0) {
      console.log('Data existed, update ct_hocmon... \n');
      const response = await db.promise().query(
        `UPDATE ct_hocmon
          SET Diem = ${Diem}
          WHERE idQTHoc = ${idQTHocValue} AND idMH = ${idMH} AND idLHKT = ${LHKT}`
      );

      console.log('Update ct_hocmon: DONE');
    } else {
      console.log('Data not existed, insert into ct_hocmon... \n');
      const response = await db.promise().query(
        `INSERT INTO ct_hocmon (idMH, Diem, idLHKT, idQTHoc)
          VALUES (${idMH}, ${Diem}, ${LHKT}, ${idQTHocValue})`
      );

      console.log('Insert into ct_hocmon: DONE \n');
      console.log('Response: ', response[0], '\n');
    }

    console.log('Checking if data existed in ketquahocmon... \n');
    const checkIfExist = await db.promise().query(
      `SELECT *
        FROM ketquahocmon
        WHERE idQTHoc = ${idQTHocValue} AND idMH = ${idMH}`
    );

    console.log('Checking: DONE \n');

    if (checkIfExist[0].length === 0) {
      console.log('Data not existed, insert into ketquahocmon... \n');
      await db.promise().query(
        `INSERT INTO ketquahocmon (idQTHoc, idMH)
          VALUES (${idQTHocValue}, ${idMH})`
      );
      console.log('Insert into ketquahocmon: DONE \n');
    } else {
      console.log('Data existed, end task. \n');
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
