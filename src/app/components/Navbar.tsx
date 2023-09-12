"use client"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
  return (
    <div className="flex items-center justify-around py-4 bg-slate-300 px-14">
        <div>
            Logo
        </div>
    <div className="px-4 bg-slate-200 shadow shadow-gray-400 rounded-l-full rounded-r-full p-1">
      <ul className="flex flex-wrap text-md font-medium text-center text-slate-800 dark:text-gray-400">
        <li className="mr-2">
          <Link href="/" className={`inline-block px-4 py-2 ${ pathname === "/" ? "text-[#001aff]" : "text-slate-800 hover:text-blue-600 ease-in duration-300" }`} > Home</Link>
        </li>
        <li className="mr-2">
          <Link href="/About" className={`inline-block px-4 py-2 ${ pathname === "/About" ? "text-[#001aff]" : "text-slate-800 hover:text-blue-600 ease-in duration-300" }`} >About</Link>
        </li>
        <li className="mr-2">
          <Link href="/tab3" className={`inline-block px-4 py-2 rounded-full ${ pathname === "/tab3" ? "text-[#001aff]" : "text-slate-800 hover:text-blue-600 ease-in duration-300" }`} >Experience</Link>
        </li>
        <li className="mr-2">
          <Link href="/tab4" className={`inline-block px-4 py-2 rounded-full ${ pathname === "/tab4" ? "text-[#001aff]" : "text-slate-800 hover:text-blue-600 ease-in duration-300" }`} >Projects</Link>
        </li>
        <li className="mr-2">
          <Link href="/tab5" className={`inline-block px-4 py-2 rounded-full ${ pathname === "/tab5" ? "text-[#001aff]" : "text-slate-800 hover:text-blue-600 ease-in duration-300" }`} >Blog</Link>
        </li>
        <li className="mr-2">
          <Link href="/tab6" className={`inline-block px-4 py-2 rounded-full ${ pathname === "/tab6" ? "text-[#001aff]" : "text-slate-800 hover:text-blue-600 ease-in duration-300" }`} >Contact</Link>
        </li>
      </ul>
    </div>
    <div>
        Theme-Toggle
    </div>
              </div>
  );
}
