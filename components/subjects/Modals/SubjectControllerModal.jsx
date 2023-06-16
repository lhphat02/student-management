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
      window.location.reload();
      // Handle the response as per your requirement
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/subject/${idMH}`);
      console.log('Subject deleted successfully');
      window.location.reload();
      // Handle any further actions after deleting the subject
    } catch (error) {
      alert('Failed to delete subject');
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
          Update Subject: <span className="text-blue-600 ">{TenMH}</span>
        </p>
      }
      body={
        <>
          <Input
            inputType="input"
            placeholder="Tên môn học"
            handleClick={(e) =>
              setNewSubjectData({
                ...newSubjectData,
                TenMH: e.target.value,
              })
            }
          />
          <Input
            inputType="input"
            placeholder="Mô tả"
            handleClick={(e) =>
              setNewSubjectData({
                ...newSubjectData,
                MoTa: e.target.value,
              })
            }
          />
          <Input
            inputType="number"
            placeholder="Hệ số"
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
            Update
          </Button>
          <Button pill={false} color="red" onClick={() => handleDelete()}>
            Delete Subject
          </Button>
          <Button pill={false} color="gray" outline onClick={() => close()}>
            Cancle
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
