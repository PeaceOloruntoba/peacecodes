import Image from "next/image";
import me from "../assets/2021me.jpg"

export default function Intro() {
    return(
        <div className="flex justify-around items-center px-36">
            <div className="p-16 flex gap-5 bg-slate-200">
            <div className="">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-zinc-400">PEACE OLORUNTOBA</h1>
                <h2>Full-Stack Software Engineer</h2>
            </div>
            <div className="p-4 rounded-xl shadow-md shadow-blue-900">
                <Image src={me} alt="Jumbotron" className="rounded-xl h-full w-full" />
            </div>
            </div>
        </div>
    )
}