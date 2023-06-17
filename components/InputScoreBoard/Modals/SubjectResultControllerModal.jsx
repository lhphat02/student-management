import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';

import Input from '@/components/Input';
import MyModal from '@/components/Modal';

const SubjectResultControllerModal = ({
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
      window.location.reload();
      // Handle the response as per your requirement
    } catch (error) {
      console.error(error);
    }
  };

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/api/student/${idHS}`);
  //     console.log('Student deleted successfully');
  //     window.location.reload();
  //     // Handle any further actions after deleting the student
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error cases
  //   }
  // };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/deleteStudent?idHS=${idHS}&idLop=${idLop}`);
      console.log('Student deleted successfully');
    } catch (error) {
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
          Update <span className="text-blue-600 ">{HoTen}</span> 's Information
        </p>
      }
      body={
        <>
          <Input
            inputType="input"
            placeholder="Full Name"
            handleClick={(e) =>
              setNewStudentData({ ...newStudentData, HoTen: e.target.value })
            }
          />
          <Input
            inputType="select"
            placeholder="Gender"
            handleClick={(e) =>
              setNewStudentData({ ...newStudentData, GioiTinh: e.target.value })
            }
          />
          <Input
            inputType="date"
            placeholder="Birthday"
            handleClick={(e) =>
              setNewStudentData({ ...newStudentData, NgaySinh: e.target.value })
            }
          />
          <Input
            inputType="input"
            placeholder="Address"
            handleClick={(e) =>
              setNewStudentData({ ...newStudentData, DiaChi: e.target.value })
            }
          />
          <Input
            inputType="input"
            title="Name"
            placeholder="Email"
            handleClick={(e) =>
              setNewStudentData({ ...newStudentData, Email: e.target.value })
            }
          />
        </>
      }
      footer={
        <div className="flex justify-center w-full gap-10">
          <Button pill={false} onClick={() => handleEdit()}>
            Submit
          </Button>
          <Button pill={false} color="gray" outline onClick={() => close()}>
            Cancle
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

export default SubjectResultControllerModal;
