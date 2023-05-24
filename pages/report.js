import Topbar from '@/components/Topbar';
import SubjectsReportTable from '@/components/report/subjectsreportTable';
import SemesterReportTable from '@/components/report/semesterreportTable';
import React, { useEffect, useState } from 'react';
import Popup from "reactjs-popup";

const Report = () => {
  const [baocaomonhoc, setBaoCaoMonHoc] = useState([]);
  const [baocaohocky, setBaoCaoHocKy] = useState([]);
  

  useEffect(() => {
    fetch('api/dbbaocaomonhoc').then(async (res) => {
      let data = await res.json();

      console.log(data);
      setBaoCaoMonHoc(data);
    });
    console.log(baocaomonhoc);
  }, []);

  useEffect(() => {
    fetch('api/dbbaocaohocky').then(async (res) => {
      let data = await res.json();
  
      console.log(data);
      setBaoCaoHocKy(data);
    });
    console.log(baocaohocky);
  }, []);



  return (
    <div>
      <Topbar NamePage="Report" />
      <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Báo cáo môn học</p>
      <div className="flex justify-center items-center mt-10 px-20">
        <SubjectsReportTable />
      </div>
      <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Báo cáo học kỳ</p>
         <div className="flex justify-center items-center mt-10 px-20">
        <SemesterReportTable />
      </div>
    </div>
  );
};

export default Report;



// const SemesterReport = () => {




// return (
//   <div>
//     <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Báo cáo học kỳ</p>
//     <div className="flex justify-center items-center mt-10 px-20">
//       <SemesterReportTable />
//     </div>
//   </div>
// );
// };

// export default SemesterReport;
