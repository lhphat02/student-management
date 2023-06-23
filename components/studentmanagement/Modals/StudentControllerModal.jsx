import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';

import Input from '@/components/Input';
import MyModal from '@/components/Modal';

const StudentControllerModal = ({
  close,
  idHS,
  HoTen,
  GioiTinh,
  NgaySinh,
  DiaChi,
  Email,
  idLop,
}) => {
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

  const [curStudentData, setCurStudentData] = useState({
    HoTen: HoTen,
    GioiTinh: GioiTinh,
    NgaySinh: NgaySinh,
    DiaChi: DiaChi,
    Email: Email,
    idLop: idLop,
  });

  const [newStudentData, setNewStudentData] = useState({
    HoTen: HoTen,
    GioiTinh: GioiTinh,
    NgaySinh: NgaySinh,
    DiaChi: DiaChi,
    Email: Email,
    idLop: idLop,
  });

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

  const handleEdit = async () => {
    try {
      const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      };

      if (!validateEmail(newStudentData.Email)) {
        alert('Email không hợp lệ');
        return;
      }

      // Make an Axios request to edit the user data
      const response = await axios.put(
        `/api/student/${idHS}`,
        newStudentData // Pass the new user data to the API
      );

      await axios.put(`/api/changeClass`, {
        idHS: idHS,
        idLop: curStudentData.idLop,
        newIdLop: newStudentData.idLop,
      });

      console.log(response.data);
      alert('Cập nhật học sinh thành công');
      // window.location.reload();
      // Handle the response as per your requirement
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/deleteStudent?idHS=${idHS}&idLop=${idLop}`);
      alert('Xóa học sinh thành công');
      window.location.reload();
    } catch (error) {
      alert('Học sinh không thể xóa');
      console.error(error);
    }
  };

  console.log('curStudentData: ', curStudentData);
  console.log('newStudentData: ', newStudentData);
  console.log('idLop:', idLop);
  console.log('idHS:', idHS);

  return (
    <MyModal
      className="absolute "
      header={
        <p className="text-2xl font-bold">
          Cập Nhật Thông Tin Của <span className="text-blue-600 ">{HoTen}</span>
        </p>
      }
      body={
        <div className="px-5">
          <div>
            <p>Họ Tên Học Sinh</p>
            <Input
              inputType="input"
              placeholder="Họ Và Tên"
              handleClick={(e) =>
                setNewStudentData({ ...newStudentData, HoTen: e.target.value })
              }
            />
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <p>Giới Tính</p>
              <Input
                inputType="select"
                placeholder="Giới Tính"
                handleClick={(e) =>
                  setNewStudentData({
                    ...newStudentData,
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
                  setNewStudentData({
                    ...newStudentData,
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
                setNewStudentData({ ...newStudentData, DiaChi: e.target.value })
              }
            />
          </div>

          <div>
            <p>Email</p>
            <Input
              inputType="input"
              // title="Name"
              placeholder="Email"
              handleClick={(e) =>
                setNewStudentData({ ...newStudentData, Email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between my-5">
              <select
                className="px-2 py-1 border border-black rounded-md"
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  const selectedOptionData = years.find(
                    (option) => option.idNam === parseInt(e.target.value)
                  );
                  setSelectedYearName(selectedOptionData.Namhoc);
                }}
              >
                <option value="">Chọn Năm Học</option>
                {years.map((year) => (
                  <option key={year.idNam} value={year.idNam}>
                    {year.Namhoc}
                  </option>
                ))}
              </select>

              <select
                className="px-2 py-1 border border-black rounded-md"
                value={selectedSemester}
                onChange={(e) => {
                  setSelectedSemester(e.target.value);
                  const selectedOptionData = semesters.find(
                    (option) => option.idHocKy === parseInt(e.target.value)
                  );
                  setSelectedSemesterName(selectedOptionData.HocKy);
                }}
              >
                <option value="">Chọn Học Kỳ</option>
                {semesters.map((semester) => (
                  <option key={semester.idHocKy} value={semester.idHocKy}>
                    {semester.HocKy}
                  </option>
                ))}
              </select>

              <select
                className="px-2 py-1 border border-black rounded-md"
                value={selectedClassGroup}
                onChange={(e) => {
                  setSelectedClassGroup(e.target.value);
                  const selectedOptionData = classGroups.find(
                    (option) => option.idKhoiLop === parseInt(e.target.value)
                  );
                  setSelectedClassGroupName(selectedOptionData.TenKhoiLop);
                }}
              >
                <option value="">Chọn Khối Lớp</option>
                {classGroups.map((classGroup) => (
                  <option
                    key={classGroup.idKhoiLop}
                    value={classGroup.idKhoiLop}
                  >
                    {classGroup.TenKhoiLop}
                  </option>
                ))}
              </select>
              <select
                className="px-2 py-1 mx-5 border border-black rounded-md"
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setNewStudentData({
                    ...newStudentData,
                    idLop: parseInt(e.target.value),
                  });
                  const selectedOptionData = classes.find(
                    (option) => option.idLop === parseInt(e.target.value)
                  );
                  setNewStudentData({
                    ...newStudentData,
                    idLop: selectedOptionData.idLop,
                  });
                  setSelectedClassName(selectedOptionData.TenLop);
                }}
              >
                <option value="">Chọn Lớp Học</option>
                {classes.map((classItem) => (
                  <option key={classItem.idLop} value={classItem.idLop}>
                    {classItem.TenLop}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      }
      footer={
        <div className="flex justify-center w-full gap-10">
          <Button pill={false} onClick={() => handleEdit()}>
            Cập Nhật
          </Button>
          <Button pill={false} color="red" onClick={() => handleDelete()}>
            Xóa Học Sinh
          </Button>
          <Button pill={false} color="gray" outline onClick={() => close()}>
            Hủy
          </Button>
        </div>
      }
      handleClose={() => {
        close();
        setNewStudentData({
          HoTen: '',
          GioiTinh: '',
          NgaySinh: '',
          DiaChi: '',
          Email: '',
        });
      }}
      closeBtn={false}
    />
  );
};

export default StudentControllerModal;
