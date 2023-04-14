import React from "react";
// import { ThemeProvider } from 'next-themes';


import Topbar from "../components/Topbar";
import Button from "../components/Button";
import Carousel from "../components/Carousel"
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { data } from "autoprefixer";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  const router = useRouter()
 


  // console.log(hocsinh)
  return (
    <main className=' min-h-screen'>
      <div>
        <Topbar NamePage='Dashboard'/>
        <p>dit me cuoc duration</p>
      
        <Carousel />
      </div>
    </main>
  );
}
  