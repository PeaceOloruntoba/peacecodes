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
            <nav className="fixed top-0 left-0 right-0 bg-gray-600 py-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="Company Logo" className="h-10" />
        </a>
        <div className="lg:hidden">
          <button className="text-gray-800 hover:text-gray-500 focus:outline-none" onClick={toggleSidebar}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (<path fillRule="evenodd" clipRule="evenodd" d="M20.293 16.293L16.586 12.586L20.293 8.879L19.172 7.757L14.465 12.464L19.172 17.172L20.293 16.293ZM3 12C3 11.4477 3.44772 11 4 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H4C3.44772 13 3 12.5523 3 12Z" />) : (<path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM4 16C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4Z" />)}
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:space-x-4 uppercase ${isOpen ? 'block' : 'hidden'}`}>
          <li><a href="/" className="text-white hover:text-slate-900" onClick={closeSidebar}>Home</a></li>
          <li><a href="#about" className="text-white hover:text-slate-900" onClick={closeSidebar}>About</a></li>
          <li><a href="#blog" className='text-white hover:text-slate-900' onClick={closeSidebar}>Blog</a></li>
          <li><a href="#services" className="text-white hover:text-slate-900" onClick={closeSidebar}>Services</a></li>
        </ul>
      </div>
    </nav>
        </div>
    )
}