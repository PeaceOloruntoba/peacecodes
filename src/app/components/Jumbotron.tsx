import Image from "next/image";
import me from "../assets/me.jpg"

export default function Jumbotron() {
    return(
        <div>
            <div className="p-16 flex gap-5 items-center">
            <div className="">
                <span className="text-6xl font-bold text-slate-800 dark:text-zinc-300">Hi 👋, I&apos;m</span>
                <h1 className="text-5xl font-bold text-blue-600 mt-8 mb-4">Peace Oloruntoba</h1>
            <div className="p-4 rounded-xl shadow-md shadow-blue-900 block lg:hidden md:block">
                <Image src={me} alt="Jumbotron" className="rounded-xl" />
            </div>
                <h2 className="text-lg font-semibold text-zinc-600 mb-8">👨‍💻 Aspiring Software Engineer | 🌐 Web Developer | 📱 Mobile App Developer | 💎 Blockchain Enthusiast | 🚀 Aspiring Innovator </h2>
                <p className="text-xl font-semibold text-slate-800 dark:text-zinc-300 mb-8">I&apos;m a dedicated Computer Science student at Anchor University, Lagos, with a two-year journey in web and mobile development. I thrive on challenges and relentlessly pursue knowledge in the ever-evolving IT landscape. Recently, I&apos;ve ventured into blockchain development.</p>
                <p className="text-xl font-semibold text-slate-800 dark:text-zinc-300">I&apos;m passionate about using technology to shape the future. Whether crafting web apps, diving into mobile development, or exploring blockchain&apos;s potential, I&apos;m committed to creating meaningful solutions. Join me in this innovative journey, where we harness technology for a brighter future.</p>
            </div>
            <div className="p-4 rounded-xl shadow-md shadow-blue-900 hidden md:hidden lg:block">
                <Image src={me} alt="Jumbotron" className="rounded-xl" />
            </div>
                </div>
                <div className="flex items-center justify-center px-16">
                <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1"/>
                </div>
        </div>
    )
}