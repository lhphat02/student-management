import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import router, {useRouter} from 'next/router';

import assets from '../assets';

const Sidebar = () => {
  return (
    <div className='flex'>
      <div className='fixed w-64 h-screen p-4 bg-slate-300 border-r-[1px] flex flex-col justify-between rounded-xl'>
        <div className='flex flex-col items-center'>

          <Link href='/'>
            <div className=' hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <div className='flex flex-row'>
              <Image 
                src={assets.dashboard}
                alt='dashboard'
                width={25}
                height={25}
              />
              <p className='text-md font-poppins mt-1 ml-3'>Dashboard</p>
              </div>
            </div>
          </Link>

          <Link href='/teachermanage'>
            <div className=' hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <div className='flex flex-row'>
               <Image 
                src={assets.teacher}
                alt='teacher'
                width={25}
                height={25}
                />
              <p className='text-md font-poppins mt-1 ml-3'>Teacher</p>
              </div>
            </div>
          </Link>

          <Link href='/studentmanage'>
          <div className=' hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <div className='flex flex-row'>
               <Image 
                src={assets.cap}
                alt='student'
                width={25}
                height={25}
                />
              <p className='text-md font-poppins mt-1 ml-3'>Student</p>
              </div>
            </div>
          </Link>

          <Link href='/subjects'>
          <div className=' hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <div className='flex flex-row'>
               <Image 
                src={assets.bookshelf}
                alt='subject'
                width={25}
                height={25}
                />
              <p className='text-md font-poppins mt-1 ml-3'>Subject</p>
              </div>
            </div>
          </Link>

          <Link href='/class'>
          <div className=' hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <div className='flex flex-row'>
               <Image 
                src={assets.training}
                alt='class'
                width={25}
                height={25}
                />
              <p className='text-md font-poppins mt-1 ml-3'>Class</p>
              </div>
            </div>
          </Link>

          <Link href='/report'>
          <div className=' hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <div className='flex flex-row'>
               <Image 
                src={assets.file}
                alt='report'
                width={25}
                height={25}
                />
              <p className='text-md font-poppins mt-1 ml-3'>Report</p>
              </div>
            </div>
          </Link>

          <Link href='/grade'>
          <div className=' hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <div className='flex flex-row'>
               <Image 
                src={assets.board}
                alt='grade'
                width={25}
                height={25}
                />
              <p className='text-md font-poppins mt-1 ml-3'>Grade</p>
              </div>
            </div>
          </Link>

          <Link href='/rules'>
          <div className=' hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <div className='flex flex-row'>
               <Image 
                src={assets.scales}
                alt='rule'
                width={25}
                height={25}
                />
              <p className='text-md font-poppins mt-1 ml-3'>Rule</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
