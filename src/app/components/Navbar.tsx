"use client"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Header from "./Header";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
  return (
        <div>
            <Header />
    <div className="flex items-center justify-around py-4 bg-slate-300 px-32 dark: dark:bg-gray-950">

        <div>
            Logo
        </div>
    <div className="bg-slate-200 shadow shadow-gray-400 rounded-l-full rounded-r-full p-1 dark:bg-slate-950">
      <ul className="flex flex-wrap text-md font-medium text-center text-slate-800 dark:text-zinc-300">
        <li className="mx-2">
          <Link href="/" className={`inline-block px-4 py-2 ${ pathname === "/" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300" }`} > Home</Link>
        </li>
        <li className="mr-2">
          <Link href="/About" className={`inline-block px-4 py-2 ${ pathname === "/About" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300" }`} >About</Link>
        </li>
        <li className="mr-2">
          <Link href="/Skills" className={`inline-block px-4 py-2 rounded-full ${ pathname === "/Skills" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300" }`} >Skills</Link>
        </li>
        <li className="mr-2">
          <Link href="/Projects" className={`inline-block px-4 py-2 rounded-full ${ pathname === "/Projects" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300" }`} >Projects</Link>
        </li>
        <li className="mr-2">
          <Link href="/Blog" className={`inline-block px-4 py-2 rounded-full ${ pathname === "/Blog" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300" }`} >Blog</Link>
        </li>
        <li className="mr-2">
          <Link href="/Contact" className={`inline-block px-4 py-2 rounded-full ${ pathname === "/Contact" ? "text-[#001aff]" : "text-slate-800 dark:text-zinc-300 hover:text-blue-600 ease-in duration-300" }`} >Contact</Link>
        </li>
      </ul>
    </div>
    <div>
        Theme-Toggle
    </div>
        </div>
              </div>
  );
}
