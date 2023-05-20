import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import Popup from 'reactjs-popup';
import { useMemo, useEffect } from 'react';
import { subjectsreportColumns } from './subjectsreportColumns';

export default function SubjectsReportTable() {
  const [subjectsreportData, setSRData] = useState([]);

  useEffect(() => {
    fetch('api/dbbaocaomonhoc').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setSRData(data);
    });

    console.log(subjectsreportData);
  }, []);

  const data = useMemo(() => subjectsreportData);
  const columns = useMemo(() => subjectsreportColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
