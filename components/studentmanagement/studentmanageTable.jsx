import React, { useState, useMemo, useEffect } from 'react';
import { useTable } from 'react-table';

import Table from '../Table';
import { studentmanageColumns } from './studentmanageColumns';

export default function StudentmanageTable({ students }) {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    console.log('student o table', students);
    students.map((item, index) => {
      item.index = index + 1;
    });
    setStudentData(students);
  });

  studentData.map(
    (item) => (item.NgaySinh = new Date(item.NgaySinh).toLocaleDateString())
  );

  const data = useMemo(() => studentData);

  const columns = useMemo(() => studentmanageColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}
