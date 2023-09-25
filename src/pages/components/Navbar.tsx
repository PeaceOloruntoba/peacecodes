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
            <nav className="flex p-2 justify-between items-center border-b-4  rounded-t mb-2">
        <Image src={logo} alt="Logo Icon" className='h-32 w-32 rounded' />
              <div>
        <ul className='flex gap-5 p-4 justify-center items-center font-semibold text-xl'>
          <Link href="/"><li className='text-blue-200 hover:text-blue-900 ease-in-out duration-300'>About</li></Link>
          <Link href="/"><li className='text-blue-200 hover:text-blue-900 ease-in-out duration-300'>How it works</li></Link>
          <Link href="/"><button className='rounded bg-blue-800 text-blue-100 p-4 px-12 hover:bg-blue-900 ease-in-out duration-300'>Get Started</button></Link>
        </ul>
              </div>
    </nav>
        </div>
    )
}