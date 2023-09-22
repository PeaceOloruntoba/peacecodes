import Image from "next/image";
import about from "../assets/homeabout.jpeg"
import Link from "next/link";

export default function Blogging () {
    return(
        <div>
        <div className="p-16 grid gap-5 items-center justify-center">
            <div className="flex gap-5 items-center justify-center">
            {/* <Image src={about} alt="Jumbotron" className="rounded-xl" /> */}
            <h2 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">Blogs:</h2>
            </div>
        <div className="shadow p-2">
        <div className="border p-4">
        <Image src={about} alt="Jumbotron" className="rounded-xl w-full" />
        <span>Lorem ipsum dolor sit amet consectetur, <br /> Lorem ipsum dolor sit amet consectetur, <br /> Lorem ipsum dolor sit amet consectetur, <Link href="" className="text-purple-500">Learn More...</Link></span>
        </div>
        <div className="border p-4">
        <Image src={about} alt="Jumbotron" className="rounded-xl w-full" />
        <span>Lorem ipsum dolor sit amet consectetur, <br /> Lorem ipsum dolor sit amet consectetur, <br /> Lorem ipsum dolor sit amet consectetur, <Link href="" className="text-purple-500">Learn More...</Link></span>
        </div>
        <div className="border p-4">
        <Image src={about} alt="Jumbotron" className="rounded-xl w-full" />
        <span>Lorem ipsum dolor sit amet consectetur, <br /> Lorem ipsum dolor sit amet consectetur, <br /> Lorem ipsum dolor sit amet consectetur, <Link href="" className="text-purple-500">Learn More...</Link></span>
        </div>

        </div>
            </div>
            <div className="flex items-center justify-center px-16">
            <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1"/>
            </div>
    </div>
    )
}