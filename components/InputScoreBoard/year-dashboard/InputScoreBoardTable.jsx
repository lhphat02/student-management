import React, { useState } from 'react';
import { useTable } from 'react-table';
import { useMemo, useEffect } from 'react';

import Table from '../../Table';
import { InputScoreBoardCol } from './InputScoreBoardCol';

export default function InputScoreBoardTable({ result }) {
  const [subjectResultData, setSubjectResultData] = useState([]);

  useEffect(() => {
    result.map((item, index) => {
      item.index = index + 1;
    });
    setSubjectResultData(result);
  }, [result]);

  const data = useMemo(() => subjectResultData);

  const columns = useMemo(() => InputScoreBoardCol);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
