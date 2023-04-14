import React from "react";
// import { ThemeProvider } from 'next-themes';

import Topbar from "../components/Topbar";
import Button from "../components/Button";
<<<<<<< HEAD
import Carousel from "../components/Carousel"
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { data } from "autoprefixer";
import { useEffect, useState, useMemo } from "react";
=======
import Carousel from "../components/Carousel";
>>>>>>> 6ad3f04822deb1242506b2c8121d1901ad89ea14

export default function Home() {
  const router = useRouter()
 


  // console.log(hocsinh)
  return (
    <main className=" min-h-screen">
      <div>
<<<<<<< HEAD
        <Topbar NamePage='Dashboard'/>
        <p>dit me cuoc duration</p>
      
        <Carousel />
=======
        <Topbar NamePage="Dashboard" />
        <div className="pt-20">
          <Carousel />
        </div>
>>>>>>> 6ad3f04822deb1242506b2c8121d1901ad89ea14
      </div>
    </main>
  );
}
