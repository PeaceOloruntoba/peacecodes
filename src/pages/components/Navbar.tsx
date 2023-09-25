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
            <nav className="flex bg-gray-600 p-2">
        <Image src={logo} alt="Logo Icon" className='h-32 w-32 rounded' />
              <div>

        <ul className='flex gap-5 p-4 justify-center items-center'>
          <Link href="/"><li className='text-white hover:text-slate-900'>About</li></Link>
          <Link href="/"><li className='text-white hover:text-slate-900'>How it works</li></Link>
          <Link href="/"><button className='rounded bg-slate-900 text-white p-4 px-12 hover:bg-slate-600 hover:border'>Get Started</button></Link>
          
        </ul>
              </div>
    </nav>
        </div>
    )
}