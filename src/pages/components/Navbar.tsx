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
            <nav className="flex bg-gray-600">
        <Image src={logo} alt="Logo Icon" />
              <div>

        <ul className='flex gap-5 p-4'>
          <Link href="/"><li className='text-white hover:text-slate-900'>About</li></Link>
          <Link href="/"><li>How it works</li></Link>
          <Link href="/"><button className='rounded'>Get Started</button></Link>
          
        </ul>
              </div>
    </nav>
        </div>
    )
}