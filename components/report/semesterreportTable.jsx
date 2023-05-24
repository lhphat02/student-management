import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import Popup from 'reactjs-popup';
import { useMemo, useEffect } from 'react';
import { semesterreportColumns } from './semesterreportColumns';

export default function SemesterReportTable() {
  const [semesterreportData, setSRData] = useState([]);

  useEffect(() => {
    fetch('api/dbbaocaohocky').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setSRData(data);
    });

    console.log(semesterreportData);
  }, []);

  const data = useMemo(() => semesterreportData);
  const columns = useMemo(() => semesterreportColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
