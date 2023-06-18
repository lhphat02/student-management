import React, { useState } from 'react';
import { useMemo, useEffect } from 'react';
import { useTable } from 'react-table';
import { semesterreportColumns } from './semesterreportColumns';
import Table from '../Table';

export default function SemesterReportTable({ semesterReports }) {
  const [semesterReportData, setSemesterReportData] = useState([]);

  useEffect(() => {
    console.log('semesterReports: ', semesterReports);
    semesterReports.map((item, index) => {
      item.index = index + 1;
    });
    setSemesterReportData(semesterReports);
  });

  const data = useMemo(() => semesterReportData);
  const columns = useMemo(() => semesterreportColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}
