import React, { useState } from 'react';
import logo from '../../app/assets/logo.png';
import Image from 'next/image';

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
            <nav className="fixed top-0 left-0 right-0 bg-gray-600 py-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        
      </div>
    </nav>
        </div>
    )
}