import React, { useState, useMemo, useEffect } from 'react';
import { useTable } from 'react-table';

import Table from '../Table';
import { studentmanageColumns } from './studentmanageColumns';

export default function StudentmanageTable() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetch('api/getStudent').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setStudentData(data);
    });

    console.log(studentData);
  }, []);

  studentData.map(
    (item) => (item.NgaySinh = new Date(item.NgaySinh).toLocaleDateString())
  );

  const data = useMemo(() => studentData);

  const columns = useMemo(() => studentmanageColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}


