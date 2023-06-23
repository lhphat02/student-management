import React, { useEffect, useState } from "react";
import axios from "axios";

import Topbar from "@/components/Topbar";
import StudentResultTable from "@/components/studentResult/StudentResultTable";

const StudentList = () => {
  const [years, setYears] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedYearName, setSelectedYearName] = useState("");

  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSemesterName, setSelectedSemesterName] = useState("");

  const [studentResult, setStudentResult] = useState([]);
  const [showTable, setShowTable] = useState(false);

  let curr_year = new Date().getFullYear();

  useEffect(() => {
    // Fetch the list of available years
    const fetchYears = async () => {
      try {
        const response = await axios.get("/api/years");
        setYears(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchYears();
  }, []);

  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        const response = await axios.get(
          "/api/semesters?idNam=" + selectedYear
        );
        setSemesters(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedYear) {
      fetchSemesters();
    }
  }, [selectedYear]);

  useEffect(() => {
    const fetchStudentResult = async () => {
      try {
        const response = await axios.get(
          "/api/getStudentResult?idHocKy=" + selectedSemester
        );
        setStudentResult(response.data);
        setShowTable(true);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedSemester) {
      fetchStudentResult();
    }
  }, [selectedSemester]);

  console.log("Năm học: ", selectedYearName, ", ID: ", selectedYear);
  console.log("Học kỳ: ", selectedSemesterName, ", ID: ", selectedSemester);

  console.log("Danh sách hs: ", studentResult);

  return (
    <>
      <Topbar NamePage="Danh Sách Học Sinh" />
      <div className="flex flex-col gap-10 px-20 pb-40 mt-10">
        {/* List of classes */}
        <p className="text-3xl font-bold font-poppins">Danh Sách Học Sinh</p>
        <div className="flex flex-col">
          {/* Filter of Year, Semester and ClassGroup */}
          <div className="flex items-center w-full mb-10">
            <p className="mr-10 text-lg font-semibold">Bộ Lọc:</p>

            <select
              className="px-2 py-1 mr-3 border-2 border-gray-300 rounded-md"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                const selectedOptionData = years.find(
                  (option) => option.idNam === parseInt(e.target.value)
                );
                setSelectedYearName(selectedOptionData.Namhoc);
              }}
            >
              <option value="" disabled selected hidden>
                Chọn Năm Học
              </option>
              {years.map((year) => (
                <option key={year.idNam} value={year.idNam}>
                  {year.Namhoc}
                </option>
              ))}
            </select>

            {selectedYear && (
              <select
                className="px-2 py-1 border-2 border-gray-300 rounded-md"
                value={selectedSemester}
                onChange={(e) => {
                  setSelectedSemester(e.target.value);
                  const selectedOptionData = semesters.find(
                    (option) => option.idHocKy === parseInt(e.target.value)
                  );
                  setSelectedSemesterName(selectedOptionData.HocKy);
                }}
              >
                <option value="" disabled selected hidden>
                  Chọn Học Kỳ
                </option>
                {semesters.map((semester) => (
                  <option key={semester.idHocKy} value={semester.idHocKy}>
                    {semester.HocKy}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* List of filtered classes */}
          {showTable ? (
            <div className="container px-4 py-8 mx-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-center bg-gray-200 border">
                      MSHS
                    </th>
                    <th className="px-4 py-2 text-center bg-gray-200 border">
                      Lớp
                    </th>
                    <th className="px-4 py-2 text-center bg-gray-200 border">
                      Họ Và Tên
                    </th>
                    <th className="px-4 py-2 text-center bg-gray-200 border">
                      Điểm TB Học Kỳ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentResult.map((student) => (
                    <tr key={student.idHS}>
                      <td className="px-4 py-2 text-center border">
                        {student.idHS}
                      </td>
                      <td className="px-4 py-2 text-center border">
                        {student.TenLop}
                      </td>
                      <td className="px-4 py-2 text-center border">
                        {student.HoTen}
                      </td>
                      <td className="px-4 py-2 text-center border">
                        {student.DiemTBHK}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-96 ">
              <p className="text-3xl font-bold">Vui Lòng Chọn Học Kỳ</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentList;
