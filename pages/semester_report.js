import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import Topbar from "@/components/Topbar";
import SemesterReportTable from "@/components/report/semesterreportTable";

const SemesterReport = () => {
  const [baocaohocky, setBaoCaoHocKy] = useState([]);

  useEffect(() => {
    fetch("api/dbbaocaohocky").then(async (res) => {
      let data = await res.json();

      console.log(data);
      setBaoCaoHocKy(data);
    });
    console.log(baocaohocky);
  }, []);

  return (
    <div>
      <Topbar NamePage="Report" />
      <p className="p-5 mt-5 text-3xl font-bold font-poppins">Báo cáo học kỳ</p>
      <div className="flex items-center justify-center px-20 mt-10">
        <SemesterReportTable />
      </div>
    </div>
  );
};

export default SemesterReport;
