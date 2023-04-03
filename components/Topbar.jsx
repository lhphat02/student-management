import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router'

import Button from './Button';
import assets from '../assets';

const Topbar = () => {
  return (
    <nav className='flex justify-between px-4 pt-4 bg-slate-100 pb-4 border-b-2 shadow-sm rounded-md'>
      <div className='flex justify-start flex-1 ml-10'>
      <Link href="/">
          <div className='flex flex-row item-center justify-center cursor-pointer'>
            <Image 
              src={assets.vocational}
              width={48}
              height={48}
              alt='logo'
            />
            <p className='text-2xl font-extrabold text-center font-rubik text-cyan-500 ml-1 mt-2'>
              UITao
            </p>
          </div>
        </Link>
      </div>
      
          <Button 
            btnName="Sign in"
            classStyles={`mx-2 rounded-xl active:scale-110 duration-100`}
            handleClick={() => {
              router.push('/signin')
            }}
          />

      {/* <div className='flex flex-row item-center justify-center cursor-pointer hover:bg-slate-200 rounded-xl p-1'>
        <Image 
          src={assets.user}
          width={48}
          height={48}
          alt='user'
        />
        <div className='ml-4'>
          <p className='font-poppins font-semibold text-lg'>User</p>
          <p className='font-mono font-medium'>Teacher</p>
        </div>
      </div> */}
    </nav>
  )
}

export default Topbar