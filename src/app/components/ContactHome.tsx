import Image from "next/image";
import about from "../../app/assets/aboutme.jpeg"
import Link from "next/link";
import { RiTwitterXFill, RiWhatsappFill, RiLinkedinBoxFill, RiFacebookBoxFill } from "react-icons/ri"


export default function ContactHome() {
    return (
        <div className="grid items-center justify-center p-10">
            <h1 className="font-bold text-4xl text-slate-800 dark:text-zinc-300">Contact:</h1>
            <div className="px-16 rounded-xl shadow shadow-blue-600 mt-4">
                <div className="grid items-center justify-center p-12 px-16">
                    <p className="text-slate-800 dark:text-zinc-300 py-3 text-xl font-semibold">You can reach me through the following means:</p>
                    <span className="text-slate-800 dark:text-zinc-300 py-2 text-2xl font-semibold flex items-center justify-around">
                        <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiTwitterXFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://wa.me/+2348166846226" target="_blank"><RiWhatsappFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://www.linkedin.com/in/peace-oloruntoba-3a003527a/" target="_blank"><RiLinkedinBoxFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiFacebookBoxFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                    </span>
                    <div className="grid items-center justify-center py-10">
                        <Link href="/Contact"><button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold p-4 text-xl px-10 rounded-lg">Contact Me</button></Link>
                        <p className="text-slate-600 dark:text-zinc-500 py-3 text-lg">Let&apos;s discuss business!!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}