import React, { useState } from 'react';
import { useMemo, useEffect } from 'react';
import { useTable } from 'react-table';
import { subjectsreportColumns } from './subjectsreportColumns';
import Table from '../Table';

export default function SubjectsReportTable({ subjectsReports }) {
  const [subjectReport, setSubjectReport] = useState([]);

  useEffect(() => {
    console.log('SubjectReports in Table: ', subjectsReports);
    subjectsReports.map((item, index) => {
      item.index = index + 1;
    });
    setSubjectReport(subjectsReports);
  });

  const data = useMemo(() => subjectReport);
  const columns = useMemo(() => subjectsreportColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
