import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "flowbite-react";

import assets from "@/assets";
import Input from "@/components/Input";
import MyModal from "@/components/Modal";
import Topbar from "@/components/Topbar";
import SubjectsTable from "@/components/subjects/subjectsTable";
import { HiPlus } from "react-icons/hi";

const Subjects = () => {
  const [subjectData, setSubjectData] = useState({
    TenMH: "",
    MoTa: "",
    HeSo: "",
  });
  const [toggleModal, setToggleModal] = useState(false);
  const [subjectResultData, setSubjectResultData] = useState([]);

  console.log(subjectData);

  const addNewSubject = async () => {
    const { TenMH, MoTa, HeSo } = subjectData;

    if (!TenMH || !MoTa || !HeSo) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    try {
      const response = await axios.post("/api/addSubject", {
        TenMH: TenMH,
        MoTa: MoTa,
        HeSo: HeSo,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Topbar NamePage="Danh Sách Môn Học" />
      <div className="flex items-center justify-between w-full px-20 mt-20">
        <p className="text-3xl font-bold font-poppins">Danh Sách Môn Học </p>
        <Button className="" onClick={() => setToggleModal(true)}>
          <HiPlus className="mr-2" />
          <p>Thêm Môn Học Mới</p>
        </Button>
      </div>
      {toggleModal ? (
        <MyModal
          className="absolute "
          header={<p className="text-2xl font-bold">Thêm môn học mới</p>}
          body={
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-lg font-semibold">
                  Tên Môn Học <span className="text-red-500 text-xl">*</span>:{" "}
                </p>
                <Input
                  inputType="input"
                  placeholder="Tên môn học"
                  handleClick={(e) =>
                    setSubjectData({ ...subjectData, TenMH: e.target.value })
                  }
                />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  Mô Tả <span className="text-red-500 text-xl">*</span>:
                </p>
                <Input
                  inputType="input"
                  placeholder="Mô tả"
                  handleClick={(e) =>
                    setSubjectData({ ...subjectData, MoTa: e.target.value })
                  }
                />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  Hệ Số <span className="text-red-500 text-xl">*</span>:
                </p>
                <Input
                  inputType="number"
                  placeholder="Hệ số"
                  handleClick={(e) =>
                    setSubjectData({ ...subjectData, HeSo: e.target.value })
                  }
                />
              </div>
            </div>
          }
          footer={
            <div className="flex justify-center w-full gap-10">
              <Button pill={false} onClick={() => addNewSubject()}>
                Chấp nhận
              </Button>
              <Button
                pill={false}
                color="gray"
                outline
                onClick={() => setToggleModal(false)}
              >
                Hủy
              </Button>
            </div>
          }
          handleClose={() => setToggleModal(false)}
          closeBtn={false}
        />
      ) : null}
      <div className="flex items-center justify-center px-20 my-10">
        <SubjectsTable />
      </div>
    </div>
  );
};

export default Subjects;
