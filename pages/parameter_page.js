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
      <Topbar NamePage="Parameter" />
      <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Parameter</p>
      <div className="flex justify-center items-center mt-10 px-20">
        <ParameterTable />
      </div>
      {/* <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Báo cáo học kỳ</p>
         <div className="flex justify-center items-center mt-10 px-20">
        <SemesterReportTable />
      </div> */}
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
