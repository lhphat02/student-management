import React, { useState } from "react";
import { useTable } from "react-table";
import Table from "../Table";
import Popup from "reactjs-popup";
import { useMemo, useEffect } from "react";
import { parameterColumn } from "./parameterColumn";

export default function ParameterTable() {
  const [parameterData, setParameterData] = useState([]);

  useEffect(() => {
    fetch("api/getParameter").then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setParameterData(data);
    });

    console.log(parameterData);
  }, []);

  const data = useMemo(() => parameterData);
  const columns = useMemo(() => parameterColumn);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
