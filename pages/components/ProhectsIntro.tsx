import Image from "next/image";
import me from "../../src/app/assets/2021me.jpg"

export default function ProjectsIntro() {
    return(
        <div className="flex justify-around items-center px-36 dark:bg-gray-950">
            <div className="p-16 flex gap-5 bg-slate-200 dark:bg-slate-950 rounded-xl">
            <div className="">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-zinc-300">PEACE OLORUNTOBA</h1>
                <h2 className="text-3xl font-semibold text-slate-800 dark:text-zinc-300 ">Full-Stack Software Engineer</h2>
                <p className="text-xl font-semibold text-slate-800 dark:text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="p-4 rounded-xl shadow-md shadow-blue-900">
                <Image src={me} alt="Jumbotron" className="rounded-xl h-full w-full" />
            </div>
            </div>
        </div>
    )
}
