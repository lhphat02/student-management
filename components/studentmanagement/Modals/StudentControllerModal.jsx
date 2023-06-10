import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Input from '@/components/Input';
import MyModal from '@/components/Modal';
import { Button } from 'flowbite-react';
import axios from 'axios';

const StudentControllerModal = ({
  close,
  idHS,
  HoTen,
  GioiTinh,
  NgaySinh,
  DiaChi,
  Email,
}) => {
  const [curStudentData, setCurStudentData] = useState({
    HoTen: HoTen,
    GioiTinh: GioiTinh,
    NgaySinh: NgaySinh,
    DiaChi: DiaChi,
    Email: Email,
  });

  const [newStudentData, setNewStudentData] = useState({
    HoTen: '',
    GioiTinh: '',
    NgaySinh: '',
    DiaChi: '',
    Email: '',
  });

  const handleEdit = async () => {
    try {
      // Make an Axios request to edit the user data
      const response = await axios.put(
        `/api/student/${idHS}`,
        newStudentData // Pass the new user data to the API
      );

      console.log(response.data);
      window.location.reload();
      // Handle the response as per your requirement
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/student/${idHS}`);
      console.log('Student deleted successfully');
      window.location.reload();
      // Handle any further actions after deleting the student
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };

  console.log(curStudentData);
  console.log(newStudentData);

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
            Update
          </Button>
          <Button pill={false} color="red" onClick={() => handleDelete()}>
            Delete Student
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

export default StudentControllerModal;
