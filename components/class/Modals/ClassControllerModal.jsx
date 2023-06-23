import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';

import Input from '@/components/Input';
import MyModal from '@/components/Modal';

const ClassControllerModal = ({ close, idLop, TenLop, idKhoiLop, idHocKy }) => {
  const [curClassData, setCurClassData] = useState({
    TenLop: TenLop,
    idKhoiLop: idKhoiLop,
    idHocKy: idHocKy,
  });

  const [newClassData, setNewClassData] = useState({
    TenLop: '',
  });

  const handleEdit = async () => {
    try {
      // Make an Axios request to edit the class data
      const response = await axios.put(
        `/api/class/${idLop}`,
        newClassData // Pass the new class data to the API
      );

      alert('Cập nhật thành công');
      window.location.reload();
      // Handle the response as per your requirement
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/deleteClass?idLop=${idLop}`);
      alert('Xóa lớp thành công');
      window.location.reload();
      // Handle any further actions after deleting the subject
    } catch (error) {
      console.error(error);
      alert('Không thể xóa lớp này');
      // Handle error cases
    }
  };

  return (
    <MyModal
      className="absolute "
      header={
        <p className="text-2xl font-bold">
          Cập Nhật Tên Lớp: <span className="text-blue-600 ">{TenLop}</span>
        </p>
      }
      body={
        <>
          <p className="text-lg font-semibold">
            Tên Lớp Mới <span className="text-red-500 text-xl">*</span>:{' '}
          </p>
          <Input
            inputType="input"
            placeholder="Tên Lớp Mới"
            handleClick={(e) =>
              setNewClassData({ ...newClassData, TenLop: e.target.value })
            }
          />
        </>
      }
      footer={
        <div className="flex justify-center w-full gap-10">
          <Button pill={false} onClick={() => handleEdit()}>
            Cập Nhật
          </Button>
          <Button pill={false} color="red" onClick={() => handleDelete()}>
            Xóa Lớp
          </Button>
          <Button pill={false} color="gray" outline onClick={() => close()}>
            Hủy
          </Button>
        </div>
      }
      handleClose={() => {
        close();
        setNewClassData({
          TenLop: '',
        });
      }}
      closeBtn={false}
    />
  );
};

export default ClassControllerModal;
