import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import { useMemo, useEffect } from 'react';
import { classColumns } from './classColumns';

export default function classTable({ classes }) {
  const [classData, setLData] = useState([]);

  useEffect(() => {
    classes.map((item, index) => {
      item.index = index + 1;
    });
    setLData(classes);
  });

  const data = useMemo(() => classData);
  const columns = useMemo(() => classColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
