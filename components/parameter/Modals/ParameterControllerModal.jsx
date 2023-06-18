import React, { useState } from "react";
import { Button } from "flowbite-react";
import axios from "axios";

import Input from "@/components/Input";
import MyModal from "@/components/Modal";

const ParameterControllerModal = ({ close, TenThamSo, GiaTri }) => {
  // const [curClassData, setCurClassData] = useState({
  //   TenLop: TenLop,
  //   idKhoiLop: idKhoiLop,
  //   idHocKy: idHocKy,
  // });

  const [newParameterValue, setNewParameterValue] = useState({
    GiaTri: 0,
  });

  console.log(newParameterValue);

  const handleEdit = async () => {
    try {
      // Make an Axios request to edit the class data
      const response = await axios.put(`/api/getParameter/`, {
        giatri: newParameterValue.GiaTri,
        ten: TenThamSo,
      });

      console.log("Parameter updated successfully");
      window.location.reload();
      // Handle the response as per your requirement
    } catch (error) {
      console.error(error);
    }
  };

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/api/class/${idLop}`);
  //     console.log("Class deleted successfully");
  //     window.location.reload();
  //     // Handle any further actions after deleting the subject
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error cases
  //   }
  // };

  return (
    <MyModal
      className="absolute "
      header={
        <p className="text-2xl font-bold">
          Update Parameter Value:{" "}
          <span className="text-blue-600 ">{GiaTri}</span>
        </p>
      }
      body={
        <>
          <Input
            inputType="input"
            placeholder="Giá Trị Mới"
            handleClick={(e) =>
              setNewParameterValue({
                ...newParameterValue,
                GiaTri: e.target.value,
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
          {/* <Button pill={false} color="red" onClick={() => handleDelete()}>
            Delete Class
          </Button> */}
          <Button pill={false} color="gray" outline onClick={() => close()}>
            Cancel
          </Button>
        </div>
      }
      handleClose={() => {
        close();
        setNewParameterValue({
          GiaTri: "",
        });
      }}
      closeBtn={false}
    />
  );
};

export default ParameterControllerModal;
