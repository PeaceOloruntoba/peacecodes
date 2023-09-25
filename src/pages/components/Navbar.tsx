import React, { useState } from 'react';
import logo from '../../app/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

    return(
        <div>
            <nav className="flex p-2 lg:justify-between sm:justify-center items-center border-b-4  rounded-t mb-2">
        <Image src={logo} alt="Logo Icon" className='h-24 w-24 rounded' />
              <div>
        <ul className='flex lg:gap-5 sm:gap-5 p-4 justify-center items-center font-semibold lg:text-lg sm:text-sm md:text-md'>
          <Link href="/"><li className='text-blue-200 hover:text-blue-900 ease-in-out duration-300 px-1'>About</li></Link>
          <Link href="/"><li className='text-blue-200 hover:text-blue-900 ease-in-out duration-300 px-1'>How it works</li></Link>
          <Link href="/"><button className='rounded bg-blue-800 text-blue-100 lg:p-3 md:p-3 sm:p-1 lg:px-8 md:px-8 sm:px-4 hover:bg-blue-900 ease-in-out duration-300'>Get Started</button></Link>
        </ul>
              </div>
    </nav>
        </div>
    )
}