import React from "react";
// import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <>
    <Head>
      <title>Quản lý học sinh</title>
      <meta name="description" content="Trang web quản lý học sinh" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className='bg-gray-100 min-h-screen'>
      <div>
        <p>đụmá lên đi đime m</p>
      </div>
    </main>
  </>
  
  );
}
  