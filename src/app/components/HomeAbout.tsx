import Image from "next/image";
import about from "../assets/homeabout.jpeg"
import Link from "next/link";

export default function HomeAbout() {
    return(
        <div>
        <div className="p-16 px-10 grid gap-5 items-center justify-center">
            <div className="hidden lg:block">
            <div className="flex gap-5 items-center justify-center">
            <Image src={about} alt="Jumbotron" className="rounded-xl" />
            <h2 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">I am just me!</h2>
            </div>
            </div>
            <div className="lg:hidden">
            <div className="grid gap-6 items-center justify-center">
            <h2 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">I am just me!</h2>
            <Image src={about} alt="Jumbotron" className="rounded-xl" />
            </div>
            </div>
        <div className="">
            <p className="text-xl font-semibold text-slate-800 dark:text-zinc-300 mb-8">I am a Computer Science student at Anchor University, Lagos, Nigeria, on a mission to transform my passion for technology into innovative solutions. As an aspiring Software Engineer, I&apos;ve honed my skills over the past two years and am proficient in web development, while also venturing into the exciting world of mobile development... <Link href="/About" className="text-purple-500">Learn More</Link></p>
        </div>
            </div>
            <div className="flex items-center justify-center px-16">
            <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1"/>
            </div>
    </div>
    )
}