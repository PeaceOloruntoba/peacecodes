"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Header />
      <div className="">
        <div className="flex items-center justify-around py-4 bg-slate-300 px-32 dark: dark:bg-gray-950">
          <div>
            Logo
          </div>
          <div className="bg-slate-200 shadow shadow-gray-400 lg:rounded-l-full lg:rounded-r-full rounded-xl p-1 dark:bg-slate-950">
            <ul className={`lg:flex text-md font-medium text-center text-slate-800 dark:text-zinc-300 ${isOpen ? 'block' : 'hidden'}`}>
              <li className="lg:mx-2">
                <Link href="/" className={`inline-block px-4 py-2 ${pathname === "/" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300"}`} onClick={closeSidebar}> Home</Link>
              </li>
              <li className="lg:mr-2">
                <Link href="/About" className={`inline-block px-4 py-2 ${pathname === "/About" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300"}`} onClick={closeSidebar}>About</Link>
              </li>
              <li className="lg:mr-2">
                <Link href="/Skills" className={`inline-block px-4 py-2 rounded-full ${pathname === "/Skills" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300"}`} onClick={closeSidebar}>Skills</Link>
              </li>
              <li className="lg:mr-2">
                <Link href="/Projects" className={`inline-block px-4 py-2 rounded-full ${pathname === "/Projects" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300"}`} onClick={closeSidebar}>Projects</Link>
              </li>
              <li className="lg:mr-2">
                <Link href="/Blog" className={`inline-block px-4 py-2 rounded-full ${pathname === "/Blog" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300"}`} onClick={closeSidebar}>Blog</Link>
              </li>
              <li className="lg:mr-2">
                <Link href="/Contact" className={`inline-block px-4 py-2 rounded-full ${pathname === "/Contact" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300"}`} onClick={closeSidebar}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='dark:bg-slate-800 bg-gray-100 rounded'>
            {/* <button className='absolute rounded-full w-16 h-16 top-6 right-16 bg-slate-900 dark:bg-slate-300 text-white dark:text-black font-semibold' onClick={toggleDarkMode}>{darkMode? "LHT" : "DRK"}</button> */}
            {
              options?.map(opt=>(
            <button key={opt.text} onClick={()=>setTheme(opt.text)} className={`text-2xl rounded-full m-2 ${theme === opt.text && "text-sky-600"}`}>
               {opt.icon}
            </button>

              ))
            }
          </div>
          <div className="lg:hidden">
            <button className="text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300 focus:outline-none" onClick={toggleSidebar}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (<path fillRule="evenodd" clipRule="evenodd" d="M20.293 16.293L16.586 12.586L20.293 8.879L19.172 7.757L14.465 12.464L19.172 17.172L20.293 16.293ZM3 12C3 11.4477 3.44772 11 4 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H4C3.44772 13 3 12.5523 3 12Z" />) : (<path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM4 16C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4Z" />)}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
