import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import Popup from 'reactjs-popup';
import { useMemo, useEffect } from 'react';
import { teachermanageColumns } from './teachermanageColumns';

export default function TeachermanageTable() {
  const [teacherData, setTCData] = useState([]);

  useEffect(() => {
    fetch('api/dbgiaovien').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setTCData(data);
    });

    console.log(teacherData);
  }, []);

  const data = useMemo(() => teacherData);
  const columns = useMemo(() => teachermanageColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
