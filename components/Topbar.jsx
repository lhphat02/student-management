import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';

import Button from './Button';
import assets from '../assets';

const Topbar = ({ NamePage }) => {
  return (
    <nav className="flex justify-between px-4 pt-5 pb-6 border-b-2 rounded-md shadow-sm bg-slate-100">
      <div className="flex justify-start flex-1">
        <Link href="/">
          <div className="flex flex-row justify-center cursor-pointer item-center">
            <Image src={assets.vocational} width={35} height={35} alt="logo" />
            <p className="mt-2 ml-1 text-2xl font-extrabold text-center font-rubik text-cyan-500">
              UIT DashBoard
            </p>
            <p className="mt-3 ml-3 text-xl font-medium font-poppins">
              / {NamePage}
            </p>
          </div>
        </Link>
      </div>

      <Link href="/">
        <div className="flex flex-row justify-center p-1 cursor-pointer item-center hover:bg-slate-200 rounded-xl">
          <Image src={assets.profile} alt="user" width={40} height={20} />

          <div className="ml-4">
            <p className="mt-1 text-lg font-medium font-poppins">
              Chào buổi sáng
            </p>
            {/* <p className='font-mono font-medium'>Teacher</p> */}
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Topbar;
