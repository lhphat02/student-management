import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import Popup from 'reactjs-popup';
import { useMemo, useEffect } from 'react';
import { classColumns } from './classColumns';

export default function classTable() {
  const [classData, setLData] = useState([]);

  useEffect(() => {
    fetch('api/dblop').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setLData(data);
    });

    console.log(classData);
  }, []);

  const data = useMemo(() => classData);
  const columns = useMemo(() => classColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
