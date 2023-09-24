import React, { useState } from 'react';

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
            Navbar
        </div>
    )
}