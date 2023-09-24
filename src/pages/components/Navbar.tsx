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
            <nav className="flex ">
        <Image src={logo} alt="Logo Icon" />
              <div>

        <ul>
          <Link href="/"><li>About</li></Link>
          <Link href="/"><li>How it works</li></Link>
          <Link href="/"><button>Get Started</button></Link>
          
        </ul>
              </div>
    </nav>
        </div>
    )
}