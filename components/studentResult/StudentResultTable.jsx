import React, { useState } from 'react';
import { useMemo, useEffect } from 'react';
import { useTable } from 'react-table';

import Table from '../Table';
import { StudentResultColumn } from './StudentResultColumn';

export default function StudentResultTable({ studentResult }) {
  const [studentResultData, setStudentResultData] = useState([]);

  useEffect(() => {
    console.log('danh sach hs o table: ', studentResult);
    studentResult.map((item, index) => {
      item.index = index + 1;
    });
    setStudentResultData(studentResult);
  }, [studentResult]);

  const data = useMemo(() => studentResult);
  const columns = useMemo(() => StudentResultColumn);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}
