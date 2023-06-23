import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';

import Input from '@/components/Input';
import MyModal from '@/components/Modal';

const SubjectControllerModal = ({ close, idMH, TenMH, MoTa, HeSo }) => {
  const [curSubjectData, setCurSubjectData] = useState({
    TenMH: TenMH,
    MoTa: MoTa,
    HeSo: HeSo,
  });

  const [newSubjectData, setNewSubjectData] = useState({
    TenMH: '',
    MoTa: '',
    HeSo: '',
  });

  const handleEdit = async () => {
    try {
      // Make an Axios request to edit the subject data
      const response = await axios.put(
        `/api/subject/${idMH}`,
        newSubjectData // Pass the new subject data to the API
      );

      console.log(response.data);
      alert('Cập nhật môn học thành công');
      window.location.reload();
      // Handle the response as per your requirement
    } catch (error) {
      console.error(error);
      alert('Cập nhật môn học thất bại');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/subject/${idMH}`);
      console.log('Subject deleted successfully');
      alert('Xóa môn học thành công');
      window.location.reload();
      // Handle any further actions after deleting the subject
    } catch (error) {
      alert('Xóa môn học thất bại');
      // Handle error cases
    }
  };

  console.log(curSubjectData);
  console.log(newSubjectData);

  return (
    <MyModal
      className="absolute "
      header={
        <p className="text-2xl font-bold">
          Cập Nhật Môn Học: <span className="text-blue-600 ">{TenMH}</span>
        </p>
      }
      body={
        <>
          <p className="text-lg font-semibold">
            Tên Môn Học <span className="text-red-500 text-xl">*</span>:{' '}
          </p>
          <Input
            inputType="input"
            placeholder="Tên Môn Học"
            handleClick={(e) =>
              setNewSubjectData({
                ...newSubjectData,
                TenMH: e.target.value,
              })
            }
          />
          <p className="pt-3 text-lg font-semibold">
            Mô Tả <span className="text-red-500 text-xl">*</span>:{' '}
          </p>
          <Input
            inputType="input"
            placeholder="Mô Tả"
            handleClick={(e) =>
              setNewSubjectData({
                ...newSubjectData,
                MoTa: e.target.value,
              })
            }
          />
          <p className="pt-3 text-lg font-semibold">
            Hệ Số <span className="text-red-500 text-xl">*</span>:{' '}
          </p>
          <Input
            inputType="number"
            placeholder="Hệ Số"
            handleClick={(e) =>
              setNewSubjectData({
                ...newSubjectData,
                HeSo: e.target.value,
              })
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
            Xóa Môn Học
          </Button>
          <Button pill={false} color="gray" outline onClick={() => close()}>
            Hủy
          </Button>
        </div>
      }
      handleClose={() => {
        close();
        setNewSubjectData({
          TenMH: '',
          MoTa: '',
          HeSo: '',
        });
      }}
      closeBtn={false}
    />
  );
};

export default SubjectControllerModal;
