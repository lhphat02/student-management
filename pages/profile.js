import React, { useEffect, useState } from 'react';
// import { ThemeProvider } from 'next-themes';
import Image from 'next/image';

import assets from '@/assets';
import Topbar from '../components/Topbar';

const Profile = () => {
  const [studentData, setHSData] = useState([]);

  useEffect(() => {
    fetch('api/dbhocsinh').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setHSData(data);
    });

    console.log(studentData);
  }, []);

  return (
    <div className="">
      <Topbar NamePage="Profile" />
      <div className="flex flex-col items-center justify-center w-full px-20 my-10 font-poppins">
        <div className="">
          <Image src={assets.profile} width={150} height={150} />
        </div>

        <div className="w-full">
          <h2 className="w-full p-3 mt-10 text-3xl font-bold border-b-2 border-gray-800">
            Student Information
          </h2>

          <div className="flex flex-row justify-start w-full mt-5 text-xl ">
            <p className="font-semibold ">Full Name: </p>
            <p className="ml-10">{studentData[0].HoTen}</p>
          </div>

          <div className="flex flex-row justify-start w-full mt-5 text-xl ">
            <p className="font-semibold ">Gender: </p>
            <p className="ml-10">{studentData[0].GioiTinh}</p>
          </div>

          <div className="flex flex-row justify-start w-full mt-5 text-xl ">
            <p className="font-semibold ">Address: </p>
            <p className="ml-10">{studentData[0].DiaChi}</p>
          </div>

          <div className="flex flex-row justify-start w-full mt-5 text-xl ">
            <p className="font-semibold ">Email: </p>
            <p className="ml-10">{studentData[0].Email}</p>
          </div>
        </div>

        <div className="w-full">
          <h2 className="w-full p-3 mt-10 text-3xl font-bold border-b-2 border-gray-800">
            Score
          </h2>

          <div className="flex flex-row justify-start w-full mt-5 text-xl ">
            <p className="font-semibold ">Full Name: </p>
            <p className="ml-10">{studentData[0].HoTen}</p>
          </div>

          <div className="flex flex-row justify-start w-full mt-5 text-xl ">
            <p className="font-semibold ">Gender: </p>
            <p className="ml-10">{studentData[0].GioiTinh}</p>
          </div>

          <div className="flex flex-row justify-start w-full mt-5 text-xl ">
            <p className="font-semibold ">Address: </p>
            <p className="ml-10">{studentData[0].DiaChi}</p>
          </div>

          <div className="flex flex-row justify-start w-full mt-5 text-xl ">
            <p className="font-semibold ">Email: </p>
            <p className="ml-10">{studentData[0].Email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
