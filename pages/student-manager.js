import { Button } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import assets from '@/assets';
import Input from '@/components/Input';
import MyModal from '@/components/Modal';
import Topbar from '@/components/Topbar';
import StudentmanageTable from '@/components/studentmanagement/studentmanageTable';

const StudentManager = () => {
  const [studenList, setStudenList] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [studentData, setStudentData] = useState({
    HoTen: '',
    GioiTinh: '',
    NgaySinh: '',
    DiaChi: '',
    Email: '',
  });

  console.log(studentData);

  const addNewStudent = async () => {
    const { HoTen, GioiTinh, NgaySinh, DiaChi, Email } = studentData;

    if (!HoTen || !GioiTinh || !NgaySinh || !DiaChi || !Email) return;

    try {
      const response = await axios.post('/api/addStudent', {
        HoTen: HoTen,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
        DiaChi: DiaChi,
        Email: Email,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateStudent = async () => {
    try {
      const response = await axios.put('/api/updateStudent', {
        HoTen: HoTen,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
        DiaChi: DiaChi,
        Email: Email,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  updateUser();

  useEffect(() => {
    fetch('api/dbhocsinh').then(async (res) => {
      let data = await res.json();

      console.log(data);
      setStudenList(data);
    });
    console.log(studenList);
  }, []);

  return (
    <div className="relative">
      <Topbar NamePage="Student Management" />
      <div className="flex justify-center w-full ">
        <Image
          className="hover:cursor-pointer"
          src={assets.edit}
          width={50}
          height={50}
          onClick={() => setToggleModal(true)}
        />
      </div>
      {toggleModal ? (
        <MyModal
          className="absolute "
          header={<p className="text-2xl font-bold">Add New Student</p>}
          body={
            <>
              <Input
                inputType="input"
                placeholder="Full Name"
                handleClick={(e) =>
                  setStudentData({ ...studentData, HoTen: e.target.value })
                }
              />
              <Input
                inputType="select"
                placeholder="Gender"
                handleClick={(e) =>
                  setStudentData({ ...studentData, GioiTinh: e.target.value })
                }
              />
              <Input
                inputType="date"
                placeholder="Birthday"
                handleClick={(e) =>
                  setStudentData({ ...studentData, NgaySinh: e.target.value })
                }
              />
              <Input
                inputType="input"
                placeholder="Address"
                handleClick={(e) =>
                  setStudentData({ ...studentData, DiaChi: e.target.value })
                }
              />
              <Input
                inputType="input"
                title="Name"
                placeholder="Email"
                handleClick={(e) =>
                  setStudentData({ ...studentData, Email: e.target.value })
                }
              />
            </>
          }
          footer={
            <div className="flex justify-center w-full gap-10">
              <Button pill={false} onClick={() => addNewStudent()}>
                Submit
              </Button>
              <Button
                pill={false}
                color="gray"
                outline
                onClick={() => setToggleModal(false)}
              >
                Cancle
              </Button>
            </div>
          }
          handleClose={() => setToggleModal(false)}
          closeBtn={false}
        />
      ) : null}
      <p className="p-5 mt-5 text-3xl font-bold font-poppins">
        Danh sách học sinh
      </p>
      <div className="flex items-center justify-center px-20 mt-10">
        <StudentmanageTable />
      </div>
    </div>
  );
};

export default StudentManager;
