import Image from "next/image";
import about from "../../app/assets/aboutme.jpeg"
import Link from "next/link";
import { RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri"


export default function ContactHome(){
    return(
        <div className="grid items-center justify-center p-10">
            <h1 className="font-bold text-4xl text-slate-800 dark:text-zinc-300">Contact:</h1>
            <div className="flex p-16 items-center justify-around rounded-xl shadow shadow-blue-600">
                <div className="">
                    <Image src={about} alt="Contact" />
                </div>
                <div className="grid items-center justify-center p-12">
                    <span className="text-slate-800 dark:text-zinc-300 py-2 text-2xl font-semibold flex items-center justify-around">
                        <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiTwitterXFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiGithubFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiLinkedinBoxFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiTwitterXFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>

                    </span>
                    <Link href="/Contact"><button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold p-4 text-xl px-10 rounded-lg">Contact Me</button></Link>
                </div>
            </div>
        </div>
    )
}