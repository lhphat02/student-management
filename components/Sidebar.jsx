import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

import assets from '../assets';

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <Image 
                src={assets.dashboard}
                alt='dashboard'
                width={35}
                height={35}
              />
            </div>
          </Link>
          <Link href='/teachermanage'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <Image 
                src={assets.teacher}
                alt='teacher'
                width={35}
                height={35}
              />
            </div>
          </Link>
          <Link href='/studentmanage'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <Image 
                src={assets.cap}
                alt='student'
                width={35}
                height={35}
              />
            </div>
          </Link>
          <Link href='/settings'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <Image 
                src={assets.settings}
                alt='settings'
                width={35}
                height={35}
              />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
