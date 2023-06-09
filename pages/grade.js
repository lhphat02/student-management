import React, { useEffect, useState } from "react";
import { Button, Tooltip } from "flowbite-react";
import { HiSearch, HiOutlinePencilAlt, HiRefresh } from "react-icons/hi";
import axios from "axios";

import Input from "@/components/Input";
import MyModal from "@/components/Modal";
import Topbar from "@/components/Topbar";
import ClassTable from "@/components/class/classTable";
import StudentmanageTable from "@/components/studentmanagement/studentmanageTable";
import InputScoreBoardTable from "@/components/InputScoreBoard/year-dashboard/InputScoreBoardTable";
import Image from "next/image";
import assets from "@/assets";

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

  const [toggleSearchUI, setToggleSearchUI] = useState(false);
  const [toggleInputUI, setToggleInputUI] = useState(true);
  const [toggleFilterModal, setToggleFilterModal] = useState(false);

  const [classData, setClassData] = useState({
    TenLop: "",
    SiSo: null,
    idKhoiLop: "",
    idHocKy: "",
  });

  const [students, setStudents] = useState([]);
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

  return (
    <>
      <Topbar NamePage="Danh Sách Bảng Điểm Học Sinh" />

      {toggleFilterModal ? (
        <MyModal
          className="absolute "
          header={<p className="text-2xl font-bold">Bộ Lọc</p>}
          body={
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between px-10 mb-5">
                <div>
                  <p className="py-5 text-lg font-semibold">
                    Năm Học <span className="text-red-500 text-xl">*</span>
                  </p>
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
                      Chọn Năm Học
                    </option>
                    {years.map((year) => (
                      <option key={year.idNam} value={year.idNam}>
                        {year.Namhoc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="py-5 text-lg font-semibold">
                    Học Kỳ <span className="text-red-500 text-xl">*</span>
                  </p>
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
                </div>

                <div>
                  <p className="py-5 text-lg font-semibold">
                    Khối Lớp <span className="text-red-500 text-xl">*</span>
                  </p>
                  <select
                    className="px-2 py-1 border-2 border-gray-300 rounded-md"
                    value={selectedClassGroup}
                    onChange={(e) => {
                      setSelectedClassGroup(e.target.value);
                      const selectedOptionData = classGroups.find(
                        (option) =>
                          option.idKhoiLop === parseInt(e.target.value)
                      );
                      setSelectedClassGroupName(selectedOptionData.TenKhoiLop);
                    }}
                  >
                    <option value="" disabled selected hidden>
                      Chọn Khối Lớp
                    </option>
                    {classGroups.map((classGroup) => (
                      <option
                        key={classGroup.idKhoiLop}
                        value={classGroup.idKhoiLop}
                      >
                        {classGroup.TenKhoiLop}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-center w-full p-3 border-t-2">
                <p className="py-5 text-lg font-semibold">
                  Lớp Học <span className="text-red-500 text-xl">*</span>:
                </p>

                <select
                  className="px-2 py-1 mx-5 border-2 border-gray-300 rounded-md"
                  value={selectedClass}
                  onChange={(e) => {
                    setSelectedClass(e.target.value);
                    setIdLop(e.target.value);
                  }}
                >
                  <option value="" disabled selected hidden>
                    Chọn Lớp Học
                  </option>
                  {classes.map((classItem) => (
                    <option key={classItem.idLop} value={classItem.idLop}>
                      {classItem.TenLop}
                    </option>
                  ))}
                </select>

                <p className="py-5 mr-5 text-lg font-semibold">
                  Môn Học <span className="text-red-500 text-xl">*</span>:{" "}
                </p>
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
                    Chọn Môn Học
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
                Chấp Nhận
              </Button>
            </div>
          }
          handleClose={() => setToggleFilterModal(false)}
          closeBtn={false}
        />
      ) : null}

      {/* <div className="pb-5 mx-20 my-5 border-b-2">
        <Button.Group>
          <Button
            color={`${toggleSearchUI ? 'info' : 'gray'}`}
            onClick={() => {
              if (toggleSearchUI === false) {
                setToggleSearchUI(!toggleSearchUI);
                setToggleInputUI(false);
              }
            }}
          >
            <HiSearch className="w-4 h-4 mr-3" />
            <p>Tra cứu điểm</p>
          </Button>
          <Button
            color={`${toggleInputUI ? 'info' : 'gray'}`}
            onClick={() => {
              if (toggleInputUI === false) {
                setToggleSearchUI(!toggleSearchUI);
                setToggleInputUI(!toggleInputUI);
              }
            }}
          >
            <HiOutlinePencilAlt className="w-4 h-4 mr-3" />
            <p>Nhập điểm</p>
          </Button>
        </Button.Group>
      </div> */}

      <div className="flex flex-col gap-10 px-20 pb-40 mt-10">
        {toggleSearchUI ? (
          <div className="flex flex-col gap-10">
            {/* Search Score UI */}
            <p className="text-3xl font-bold font-poppins">
              Tra Cứu Bảng Điểm Môn Học Học Sinh
            </p>
            <div className="flex justify-between">
              {/* Filter of Year, Semester and ClassGroup */}
              <div className="flex items-center w-4/5 gap-5">
                <p className="text-lg font-semibold">Bộ Lọc:</p>

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
                      Chọn Học Kỳ
                    </option>
                    {semesters.map((semester) => (
                      <option key={semester.idHocKy} value={semester.idHocKy}>
                        {semester.HocKy}
                      </option>
                    ))}
                  </select>
                )}

                {selectedYear && (
                  <select
                    className="px-2 py-1 border-2 border-gray-300 rounded-md"
                    value={selectedClassGroup}
                    onChange={(e) => {
                      setSelectedClassGroup(e.target.value);
                      setClassData({
                        ...classData,
                        idKhoiLop: e.target.value,
                      });
                      const selectedOptionData = classGroups.find(
                        (option) =>
                          option.idKhoiLop === parseInt(e.target.value)
                      );
                      setSelectedClassGroupName(selectedOptionData.TenKhoiLop);
                    }}
                  >
                    <option value="" disabled selected hidden>
                      Chọn Khối Lớp
                    </option>
                    {classGroups.map((classGroup) => (
                      <option
                        key={classGroup.idKhoiLop}
                        value={classGroup.idKhoiLop}
                      >
                        {classGroup.TenKhoiLop}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* List of filtered classes */}
            <ClassTable classes={classes} />
          </div>
        ) : null}

        {toggleInputUI ? (
          <div className="flex flex-col gap-10">
            {/* Search Score UI */}
            <p className="text-3xl font-bold font-poppins">
              Bảng Điểm Môn Học{" "}
              <span className="text-blue-700">{selectedSubjectName}</span>
            </p>
            <div className="flex justify-between">
              <div className="flex items-center w-4/5 gap-5">
                <Button onClick={() => setToggleFilterModal(true)}>
                  <HiSearch className="w-4 h-4 mr-3" />
                  <p> Bộ Lọc</p>
                </Button>
              </div>
              {showTable ? (
                <Button
                  onClick={() => {
                    fetchSubjectResult();
                  }}
                >
                  <HiRefresh className="w-4 h-4 mr-3" />
                  <p>Làm Mới</p>
                </Button>
              ) : null}
            </div>

            {/* List of filtered classes */}
            {showTable ? (
              <InputScoreBoardTable result={result} />
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
                    Xin Hãy Chọn Lớp Và Môn Học
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
