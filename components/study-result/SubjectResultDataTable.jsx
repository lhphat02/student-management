import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import Popup from 'reactjs-popup';
import { useMemo, useEffect } from 'react';
import { SubjectResultDataColumn } from './SubjectResultDataColumn';

export default function SubjectResultDataTable() {
  const [subjectResultData, setSubjectResultData] = useState([]);

  useEffect(() => {
    fetch('api/getSubjectResult').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log('danh sach diem: ', data);
      setSubjectResultData(data);
    });

    console.log(subjectResultData);
  }, []);

  const data = useMemo(() => subjectResultData);
  const columns = useMemo(() => SubjectResultDataColumn);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
