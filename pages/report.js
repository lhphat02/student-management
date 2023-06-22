import React, { useEffect, useState } from "react";
import { Button, Tooltip } from "flowbite-react";
import {
  HiSearch,
  HiOutlinePencilAlt,
  HiRefresh,
  HiDocumentReport,
  HiOutlineDocumentReport,
  HiFolder,
} from "react-icons/hi";
import axios from "axios";

import Input from "@/components/Input";
import MyModal from "@/components/Modal";
import Topbar from "@/components/Topbar";
import ClassTable from "@/components/class/classTable";
import StudentmanageTable from "@/components/studentmanagement/studentmanageTable";
import InputScoreBoardTable from "@/components/InputScoreBoard/year-dashboard/InputScoreBoardTable";
import Image from "next/image";
import assets from "@/assets";
import SemesterReportTable from "@/components/report/semesterreportTable";
import SubjectsReportTable from "@/components/report/SubjectReportTable";

const Class = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedYearName, setSelectedYearName] = useState("");

  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSemesterName, setSelectedSemesterName] = useState("");

  const [classGroups, setClassGroups] = useState([]);
  const [selectedClassGroup, setSelectedClassGroup] = useState("");
  const [selectedClassGroupName, setSelectedClassGroupName] = useState("");

  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedClassName, setSelectedClassName] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSubjectName, setSelectedSubjectName] = useState("");

  const [result, setResult] = useState([]);

  const [toggleSemesterReport, setToggleSemesterReport] = useState(true);
  const [toggleSubjectReport, setToggleSubjectReport] = useState(false);

  const [toggleFilterModal, setToggleFilterModal] = useState(false);

  const [classData, setClassData] = useState({
    TenLop: "",
    SiSo: null,
    idKhoiLop: "",
    idHocKy: "",
  });

  const [students, setStudents] = useState([]);
  const [semesterReportData, setSemesterReportData] = useState([]);
  const [subjectsReportData, setSubjectsReportData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const [idLop, setIdLop] = useState("");

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
    // Fetch the list of available semesters for the selected year
    const fetchSemesters = async () => {
      try {
        const response = await axios.get(
          `/api/semesters?idNam=${selectedYear}`
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
    // Fetch the list of available class groups for the selected semester
    const fetchClassGroups = async () => {
      try {
        const response = await axios.get(`/api/class-groups`);
        setClassGroups(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedYear) {
      fetchClassGroups();
    }
  }, [selectedYear]);

  useEffect(() => {
    // Fetch the available classes within the selected class group
    const fetchClasses = async () => {
      setClasses([]);

      try {
        const response = await axios.get(
          `/api/getClass?idHocKy=${selectedSemester}&idKhoiLop=${selectedClassGroup}`
        );
        setClasses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedClassGroup) {
      fetchClasses();
    }
  }, [selectedYear, selectedSemester, selectedClassGroup]);

  useEffect(() => {
    // Fetch the available classes within the selected class group
    const fetchStudents = async () => {
      setStudents([]);

      try {
        const response = await axios.get(`/api/getStudent?idLop=${idLop}`);
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (idLop) {
      fetchStudents();
    }
  }, [idLop]);

  useEffect(() => {
    // Fetch the available subjects within the selected class
    const fetchSubjects = async () => {
      setSubjects([]);

      try {
        const response = await axios.get(`/api/getSubject`);
        setSubjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubjects();
  }, []);

  // Fetch the available subjects within the selected class
  const fetchSubjectResult = async () => {
    setResult([]);

    try {
      const response = await axios.get(
        `/api/getSubjectResult?idLop=${selectedClass}&idHocKy=${selectedSemester}&idMH=${selectedSubject}`
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedClass && selectedSemester && selectedSubject) {
      fetchSubjectResult();
    }
  }, [selectedClass, selectedSemester, selectedSubject]);

  const fetchSemesterReport = async () => {
    setSemesterReportData([]);

    try {
      const response = await axios.get(
        `/api/getSemesterReport?idHocKy=${selectedSemester}`
      );
      setSemesterReportData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedSemester) {
      fetchSemesterReport();
    }
  }, [selectedSemester]);

  const fetchSubjectReport = async () => {
    setSubjectsReportData([]);

    try {
      const response = await axios.get(
        `/api/getSubjectReport?idHocKy=${selectedSemester}&idMH=${selectedSubject}`
      );
      setSubjectsReportData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedSemester && selectedSubject) {
      fetchSubjectReport();
    }
  }, [selectedSemester, selectedSubject]);

  console.log("subjectsReportData at FE: ", subjectsReportData);

  return (
    <>
      <Topbar NamePage="Báo cáo tổng kết" />

      {toggleFilterModal ? (
        <MyModal
          className="absolute "
          header={<p className="text-2xl font-bold">Bộ lọc</p>}
          body={
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-center gap-20 px-10 mb-5">
                <div>
                  <p className="py-5 text-lg font-semibold">Năm học</p>
                  <select
                    className="px-2 py-1 border-2 border-gray-300 rounded-md"
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
                      Chọn năm học
                    </option>
                    {years.map((year) => (
                      <option key={year.idNam} value={year.idNam}>
                        {year.Namhoc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="py-5 text-lg font-semibold">Học kỳ</p>
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
                      Chọn học kỳ
                    </option>
                    {semesters.map((semester) => (
                      <option key={semester.idHocKy} value={semester.idHocKy}>
                        {semester.HocKy}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-center w-full p-3 border-t-2">
                <p className="py-5 mr-5 text-lg font-semibold">Môn Học: </p>
                <select
                  className="px-2 py-1 border-2 border-gray-300 rounded-md"
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value);
                    const selectedOptionData = subjects.find(
                      (option) => option.idMH === parseInt(e.target.value)
                    );
                    setSelectedSubjectName(selectedOptionData.TenMH);
                  }}
                >
                  <option value="" disabled selected hidden>
                    Chọn môn học
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject.idMH} value={subject.idMH}>
                      {subject.TenMH}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          }
          footer={
            <div className="flex justify-center w-full gap-10">
              <Button
                pill={false}
                onClick={() => {
                  setToggleFilterModal(false);
                  setShowTable(true);
                }}
              >
                Chấp nhận
              </Button>
            </div>
          }
          handleClose={() => setToggleFilterModal(false)}
          closeBtn={false}
        />
      ) : null}

      <div className="pb-5 mx-20 my-5 border-b-2">
        <Button.Group>
          <Button
            color={`${toggleSemesterReport ? "info" : "gray"}`}
            onClick={() => {
              if (toggleSemesterReport === false) {
                setToggleSemesterReport(!toggleSemesterReport);
                setToggleSubjectReport(false);
              }
            }}
          >
            <HiDocumentReport className="w-4 h-4 mr-3" />
            <p>Báo cáo học kỳ</p>
          </Button>
          <Button
            color={`${toggleSubjectReport ? "info" : "gray"}`}
            onClick={() => {
              if (toggleSubjectReport === false) {
                setToggleSemesterReport(!toggleSemesterReport);
                setToggleSubjectReport(!toggleSubjectReport);
              }
            }}
          >
            <HiFolder className="w-4 h-4 mr-3" />
            <p>Báo cáo môn học</p>
          </Button>
        </Button.Group>
      </div>

      <div className="flex flex-col gap-10 px-20 pb-40 mt-10">
        {toggleSemesterReport ? (
          <div className="flex flex-col gap-10">
            {/* Search Score UI */}
            <p className="text-3xl font-bold font-poppins">
              Báo cáo học kỳ
              {selectedYearName && selectedSemesterName && (
                <span className="text-3xl font-semibold text-blue-700">
                  {" "}
                  {selectedSemesterName} - {selectedYearName}
                </span>
              )}
            </p>
            <div className="flex justify-between">
              {/* Filter of Year, Semester and ClassGroup */}
              <div className="flex items-center w-4/5 gap-5">
                <p className="text-lg font-semibold">Bộ lọc:</p>

                <select
                  className="px-2 py-1 border-2 border-gray-300 rounded-md"
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
                    Chọn năm học
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
                      setClassData({
                        ...classData,
                        idHocKy: e.target.value,
                      });
                      const selectedOptionData = semesters.find(
                        (option) => option.idHocKy === parseInt(e.target.value)
                      );
                      setSelectedSemesterName(selectedOptionData.HocKy);
                    }}
                  >
                    <option value="" disabled selected hidden>
                      Chọn học kỳ
                    </option>
                    {semesters.map((semester) => (
                      <option key={semester.idHocKy} value={semester.idHocKy}>
                        {semester.HocKy}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* List of filtered classes */}
            <SemesterReportTable semesterReports={semesterReportData} />
          </div>
        ) : null}

        {toggleSubjectReport ? (
          <div className="flex flex-col gap-10">
            {/* Search Score UI */}
            <div className="text-3xl font-bold font-poppins">
              Báo cáo môn học{" "}
              <span className="text-blue-700">{selectedSubjectName}</span>
              {selectedSemester && (
                <div className="flex w-full mt-10">
                  <p>Học Kỳ</p>
                  <span className="ml-3 text-3xl font-semibold text-blue-700">
                    {" "}
                    {selectedSemesterName} - {selectedYearName}
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <div className="flex items-center w-4/5 gap-5">
                <Button onClick={() => setToggleFilterModal(true)}>
                  <HiSearch className="w-4 h-4 mr-3" />
                  <p> Bộ lọc</p>
                </Button>
              </div>
            </div>

            {/* List of filtered classes */}
            {showTable ? (
              <SubjectsReportTable subjectsReports={subjectsReportData} />
            ) : (
              <>
                <div className="flex flex-col items-center justify-center w-full text-center">
                  <div className="flex items-center justify-center w-full">
                    <Image
                      src={assets.finding}
                      alt="Finding"
                      width={300}
                      height={300}
                    />
                  </div>
                  <p className="w-full mt-10 text-4xl font-bold text-blue-700">
                    Xin hãy chọn học kỳ và môn học
                  </p>
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Class;
