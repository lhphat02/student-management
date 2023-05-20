import Topbar from '@/components/Topbar';
import SubjectsReportTable from '@/components/report/subjectsreportTable';
import React, { useEffect, useState } from 'react';
import Popup from "reactjs-popup";

const SubjectsReport = () => {
  const [baocaomonhoc, setBaoCaoMonHoc] = useState([]);

  useEffect(() => {
    fetch('api/dbbaocaomonhoc').then(async (res) => {
      let data = await res.json();

      console.log(data);
      setBaoCaoMonHoc(data);
    });
    console.log(baocaomonhoc);
  }, []);

  return (
    <div>
      <Topbar NamePage="Report" />
      <div className="flex justify-center items-center mt-20 px-20">
        <SubjectsReportTable />
      </div>
    </div>
  );
};

export default SubjectsReport;
