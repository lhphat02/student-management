import React from "react";
// import { ThemeProvider } from 'next-themes';
import Image from "next/image";

import assets from "@/assets";
import Topbar from "../components/Topbar";

const Profile = () => {
  return (
    <div className="">
      <Topbar NamePage="Profile" />
      <p className=" p-5 mt-5 text-3xl font-poppins font-bold flex justify-center items-center">
        Danh sách học sinh
      </p>
      <div className="w-3/4 flex justify-between px-52 ml-96 mt-40">
        <div className="">
          <Image
            src={assets.yahoo}
            width={160}
            height={160}
            className="rounded-full border-2 hover:cursor-pointer"
          />
          <p className="font-poppins font-medium text-lg ml-3 mt-10 bg-slate-200 text-center rounded-xl hover:cursor-pointer hover:bg-black hover:text-white">
            Thay đổi ảnh
          </p>
        </div>
        <div className="">
          <p className="font-poppins font-medium text-xl my-3">
            Name: Nguyễn Minh Quân
          </p>
          <p className="font-poppins font-medium text-xl my-3">
            Giới tính: Nam
          </p>
          <p className="font-poppins font-medium text-xl my-3">
            Ngày sinh: 25/07/2002
          </p>
          <p className="font-poppins font-medium text-xl my-3">
            Địa chỉ: Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.{" "}
          </p>
          <p className="font-poppins font-medium text-xl my-3">
            Email: info@uit.edu.vn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
