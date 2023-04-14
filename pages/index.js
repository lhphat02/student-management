import React from "react";
// import { ThemeProvider } from 'next-themes';

import Topbar from "../components/Topbar";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <div>
        <Topbar NamePage="Dashboard" />
        <div className="pt-20">
          <Carousel />
        </div>
      </div>
    </main>
  );
}
