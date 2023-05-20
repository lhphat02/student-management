import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import Popup from 'reactjs-popup';
import { useMemo, useEffect } from 'react';
import { subjectsColumns } from './subjectsColumns';

export default function SubjectsTable() {
  const [subjectsData, setMHData] = useState([]);

  useEffect(() => {
    fetch('api/dbmonhoc').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setMHData(data);
    });

    console.log(subjectsData);
  }, []);

  const data = useMemo(() => subjectsData);
  const columns = useMemo(() => subjectsColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
