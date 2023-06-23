import Topbar from "@/components/Topbar";
import ParameterTable from "@/components/parameter/parameterTable";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

const Report = () => {
  //   const [baocaomonhoc, setBaoCaoMonHoc] = useState([]);
  //   const [baocaohocky, setBaoCaoHocKy] = useState([]);

  //   useEffect(() => {
  //     fetch('api/dbbaocaomonhoc').then(async (res) => {
  //       let data = await res.json();

  //       console.log(data);
  //       setBaoCaoMonHoc(data);
  //     });
  //     console.log(baocaomonhoc);
  //   }, []);

  //   useEffect(() => {
  //     fetch('api/dbbaocaohocky').then(async (res) => {
  //       let data = await res.json();

  //       console.log(data);
  //       setBaoCaoHocKy(data);
  //     });
  //     console.log(baocaohocky);
  //   }, []);

  return (
    <div>
      <Topbar NamePage="Quy Định" />
      <p className="px-20 mt-10 text-3xl font-bold font-poppins">
        Điều Chỉnh Quy Định
      </p>
      <div className="flex items-center justify-center px-20 mt-10">
        <ParameterTable />
      </div>
      {/* <p className="p-5 mt-5 text-3xl font-bold font-poppins">Báo cáo học kỳ</p>
         <div className="flex items-center justify-center px-20 mt-10">
        <SemesterReportTable />
      </div> */}
    </div>
  );
};

export default Report;

// const SemesterReport = () => {

// return (
//   <div>
//     <p className="p-5 mt-5 text-3xl font-bold font-poppins">Báo cáo học kỳ</p>
//     <div className="flex items-center justify-center px-20 mt-10">
//       <SemesterReportTable />
//     </div>
//   </div>
// );
// };

// export default SemesterReport;
