import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import Popup from 'reactjs-popup';
import { useMemo, useEffect } from 'react';
import { yearColumn } from './year-column';

export default function YearTable() {
  const [yearData, setYearData] = useState([]);

  useEffect(() => {
    fetch('api/years').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setYearData(data);
    });

    console.log(yearData);
  }, []);

  const data = useMemo(() => yearData);
  const columns = useMemo(() => yearColumn);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
