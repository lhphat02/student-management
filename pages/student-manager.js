import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { HiSearch, HiPlus, HiArrowCircleUp } from 'react-icons/hi';
import axios from 'axios';

import Input from '@/components/Input';
import MyModal from '@/components/Modal';
import Topbar from '@/components/Topbar';
import StudentmanageTable from '@/components/studentmanagement/studentmanageTable';
import assets from '@/assets';
import Image from 'next/image';

const Class = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedYearName, setSelectedYearName] = useState('');

  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSemesterName, setSelectedSemesterName] = useState('');

  const [classGroups, setClassGroups] = useState([]);
  const [selectedClassGroup, setSelectedClassGroup] = useState('');
  const [selectedClassGroupName, setSelectedClassGroupName] = useState('');

  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedClassName, setSelectedClassName] = useState('');

  const [idLop, setIdLop] = useState('');
  const [newIdLop, setNewIdLop] = useState('');

  const [studentData, setStudentData] = useState({
    HoTen: '',
    GioiTinh: '',
    NgaySinh: '',
    DiaChi: '',
    Email: '',
    idLop: idLop,
  });

  const [students, setStudents] = useState([]);

  const [toggleFilterModal, setToggleFilterModal] = useState(false);
  const [toggleAddStudentModal, setToggleAddStudentModal] = useState(false);
  const [toggleMigrate, setToggleMigrate] = useState(false);

  const [showTable, setShowTable] = useState(false);
  let curr_year = new Date().getFullYear();

  useEffect(() => {
    // Fetch the list of available years
    const fetchYears = async () => {
      try {
        const response = await axios.get('/api/years');
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
    // Fetch the available classes within the selected class group, for the selected semester and year
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

  const fetchStudents = async () => {
    setStudents([]);

    try {
      const response = await axios.get(`/api/getStudent?idLop=${idLop}`);
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch the available classes within the selected class group
    if (idLop) {
      fetchStudents();
    }
  }, [idLop]);

  const addNewStudent = async () => {
    const { HoTen, GioiTinh, NgaySinh, DiaChi, Email } = studentData;

    if (!HoTen || !GioiTinh || !NgaySinh || !DiaChi || !Email || !idLop) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    const validateEmail = (email) => {
      const re = /\S+@\S+\.[A-Za-z]{2,}/;
      return re.test(email);
    };

    if (!validateEmail(Email)) {
      alert('Email không hợp lệ');
      return;
    }

    try {
      const response = await axios.post('/api/addStudent', {
        HoTen: HoTen,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
        DiaChi: DiaChi,
        Email: Email,
        idLop: idLop,
      });

      fetchStudents();
      setToggleAddStudentModal(false);

      console.log('Success:', response.data);
      alert('Thêm học sinh thành công');
    } catch (error) {
      console.error('Error:', error.response.data);
      if (error.response.data === 'Invalid student age.') {
        alert('Tuổi học sinh phải từ 15 đến 20 tuổi');
      } else if (
        error.response.data === 'Cannot add this student to this class'
      ) {
        alert('Lớp đã đạt số lượng học sinh tối đa');
      } else if (error.response.data === 'Student already exists') {
        alert('Học sinh đã tồn tại');
      }
    }
  };

  const migrateStudent = async () => {
    if (!idLop || !newIdLop) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    if (idLop === newIdLop) {
      alert('Vui lòng nhập id lớp mới khác lớp cũ');
      return;
    }

    try {
      const response = await axios.post('/api/migrateStudent', {
        currentIdLop: idLop,
        newIdLop: newIdLop,
      });

      fetchStudents();
      setToggleMigrate(false);

      console.log('Success:', response.data);
      alert('Chuyển lớp thành công');
      // window.location.reload();
    } catch (error) {
      console.error('Error:', error);
      alert('ID Lớp không tồn tại');
    }
  };

  console.log('idLop', idLop);
  console.log('newIdLop', newIdLop);

  return (
    <>
      <Topbar NamePage="Danh Sách Lớp" />
      <div className="flex flex-col gap-10 px-20 pb-40 mt-10">
        {/* Modal for adding new class */}
        {toggleAddStudentModal ? (
          <MyModal
            className="absolute "
            header={<p className="text-2xl font-bold">Thêm Học Sinh Mới</p>}
            body={
              <div className="px-5">
                <div>
                  <p>Họ Tên Học Sinh</p>
                  <Input
                    inputType="input"
                    placeholder="Họ Và Tên"
                    handleClick={(e) =>
                      setStudentData({ ...studentData, HoTen: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-col w-full">
                    <p>Giới Tính</p>
                    <Input
                      inputType="select"
                      placeholder="Giới Tính"
                      handleClick={(e) =>
                        setStudentData({
                          ...studentData,
                          GioiTinh: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <p>Ngày Sinh</p>
                    <Input
                      inputType="date"
                      placeholder="Ngày Sinh"
                      handleClick={(e) =>
                        setStudentData({
                          ...studentData,
                          NgaySinh: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <p>Địa Chỉ</p>
                  <Input
                    inputType="input"
                    placeholder="Địa Chỉ"
                    handleClick={(e) =>
                      setStudentData({ ...studentData, DiaChi: e.target.value })
                    }
                  />
                </div>
                <div>
                  <p>Email</p>
                  <Input
                    inputType="input"
                    title="Name"
                    placeholder="Email"
                    handleClick={(e) =>
                      setStudentData({ ...studentData, Email: e.target.value })
                    }
                  />
                </div>
              </div>
            }
            footer={
              <div className="flex justify-center w-full gap-10">
                <Button pill={false} onClick={() => addNewStudent()}>
                  Chấp Nhận
                </Button>
                <Button
                  pill={false}
                  color="gray"
                  outline
                  onClick={() => setToggleAddStudentModal(false)}
                >
                  Hủy
                </Button>
              </div>
            }
            handleClose={() => setToggleAddStudentModal(false)}
            closeBtn={false}
            clickOutSide={true}
          />
        ) : null}

        {toggleMigrate ? (
          <MyModal
            className="absolute "
            header={<p className="text-2xl font-bold">Chuyển Lớp</p>}
            body={
              <>
                <p className="text-lg font-semibold">
                  ID Lớp Mới <span className="text-xl text-red-500">*</span>:{' '}
                </p>
                <Input
                  inputType="number"
                  placeholder="ID Lớp mới"
                  handleClick={(e) => setNewIdLop(e.target.value)}
                />
              </>
            }
            footer={
              <div className="flex justify-center w-full gap-10">
                <Button pill={false} onClick={() => migrateStudent()}>
                  Chấp Nhận
                </Button>
                <Button
                  pill={false}
                  color="gray"
                  outline
                  onClick={() => setToggleMigrate(false)}
                >
                  Hủy
                </Button>
              </div>
            }
            handleClose={() => setToggleMigrate(false)}
            closeBtn={false}
          />
        ) : null}

        {toggleFilterModal ? (
          <MyModal
            className="absolute "
            header={<p className="text-2xl font-bold">Bộ Lọc</p>}
            body={
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between px-10 mb-5">
                  <div>
                    <p className="py-5 text-lg font-semibold">
                      Năm Học <span className="text-xl text-red-500">*</span>
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
                      Học Kỳ <span className="text-xl text-red-500">*</span>
                    </p>
                    <select
                      className="px-2 py-1 border-2 border-gray-300 rounded-md"
                      value={selectedSemester}
                      onChange={(e) => {
                        setSelectedSemester(e.target.value);
                        const selectedOptionData = semesters.find(
                          (option) =>
                            option.idHocKy === parseInt(e.target.value)
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
                      Khối Lớp <span className="text-xl text-red-500">*</span>
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
                        setSelectedClassGroupName(
                          selectedOptionData.TenKhoiLop
                        );
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
                    Lớp Học <span className="text-xl text-red-500">*</span>:
                  </p>

                  <select
                    className="px-2 py-1 mx-5 border-2 border-gray-300 rounded-md"
                    value={selectedClass}
                    onChange={(e) => {
                      setSelectedClass(e.target.value);
                      setIdLop(e.target.value);
                      const selectedOptionData = classes.find(
                        (option) => option.idLop === parseInt(e.target.value)
                      );
                      setStudentData({
                        ...studentData,
                        idLop: selectedOptionData.idLop,
                      });
                      setSelectedClassName(selectedOptionData.TenLop);
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

        {/* List of classes */}
        <p className="text-3xl font-bold font-poppins">
          Danh Sách{' '}
          {selectedClass && (
            <span className="text-4xl text-blue-700">
              Lớp {selectedClassName}
            </span>
          )}
        </p>
        <div className="flex justify-between">
          {/* Filter of Year, Semester and ClassGroup */}
          <div className="flex items-center">
            <Button onClick={() => setToggleFilterModal(true)}>
              <HiSearch className="w-4 h-4 mr-3" />
              <p> Chọn Lớp Học</p>
            </Button>
          </div>

          {/* Add new class button */}
          {showTable && (
            <div className="flex gap-10">
              <Button onClick={() => setToggleMigrate(true)}>
                <HiArrowCircleUp className="w-5 h-5 mr-2" />
                <p>Chuyển Lớp</p>
              </Button>

              <Button onClick={() => setToggleAddStudentModal(true)}>
                <HiPlus className="mr-2" />
                <p>Thêm Học Sinh Mới</p>
              </Button>
            </div>
          )}
        </div>

        {/* List of filtered classes */}

        {showTable ? (
          <StudentmanageTable students={students} />
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
                Xin Hãy Chọn Lớp Học
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Class;
