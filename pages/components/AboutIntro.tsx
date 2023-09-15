import Image from "next/image";
import me from "../assets/2021me.jpg"

export default function AboutIntro() {
    return(
        <div className="flex justify-around items-center px-36 dark:bg-gray-950">
            <div className="p-16 flex gap-5 bg-slate-200 dark:bg-slate-950 rounded-xl">
            <div className="">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-zinc-300">PEACE OLORUNTOBA</h1>
                <h2 className="text-3xl font-semibold text-slate-800 dark:text-zinc-300 ">Full-Stack Software Engineer</h2>
            </div>
            <div className="p-4 rounded-xl shadow-md shadow-blue-900">
                <Image src={me} alt="Jumbotron" className="rounded-xl h-full w-full" />
            </div>
            </div>
        </div>
    )
}
