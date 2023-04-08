import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router'

import Button from './Button';
import assets from '../assets';

const Topbar = ({ NamePage}) => {
  return (
    <nav className='flex justify-between px-4 pt-5 bg-slate-100 pb-6 border-b-2 shadow-sm rounded-md'>
      <div className='flex justify-start flex-1'>
      <Link href="/">
          <div className='flex flex-row item-center justify-center cursor-pointer'>
            <Image 
              src={assets.vocational}
              width={35}
              height={35}
              alt='logo'
            />
            <p className='text-2xl font-extrabold text-center font-rubik text-cyan-500 ml-1 mt-2'>
              UITao
            </p>
            <p className='font-poppins font-medium text-xl ml-3 mt-3'>/ {NamePage}</p>
          </div>
        </Link>
      </div>

      <div className='flex flex-row item-center justify-center cursor-pointer hover:bg-slate-200 rounded-xl p-1'>
        <div>
        <Image 
          src={assets.user}
          alt='user'
        />
        </div>
        <div className='ml-4'>
          <p className='font-poppins font-medium text-lg mt-1'>Welcome, Teacher</p>
          {/* <p className='font-mono font-medium'>Teacher</p> */}
        </div>
      </div>
    </nav>
  )
}

export default Topbar