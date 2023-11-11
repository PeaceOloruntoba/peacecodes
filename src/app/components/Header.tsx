import Link from "next/link";
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiTwitterXFill, RiWhatsappFill } from "react-icons/ri";

export default function Header() {
    return (
        <div className="flex items-center justify-between px-4 lg:px-14 py-2 bg-slate-300 dark:bg-gray-950 text-slate-900 dark:text-slate-200 font-semibold">
            <span className="hidden md:block lg:block">
                I am open to connect and also to collaborate
            </span>
            <span className="text-slate-800 dark:text-zinc-300 py-2 text-2xl font-semibold flex items-center justify-around gap-8">
                <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiTwitterXFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                <Link href="https://wa.me/+2348166846226" target="_blank"><RiWhatsappFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                <Link href="https://www.linkedin.com/in/peace-oloruntoba-3a003527a/" target="_blank"><RiLinkedinBoxFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiFacebookBoxFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
            </span>
        </div>
    )
}
