import Image from "next/image";
import me from "../assets/2021me.jpg"

export default function Intro() {
    return(
        <div className="flex justify-around items-center">
            <div className="p-6 px-14 flex gap-5">
            <div className="">
                <h1>PEACE OLORUNTOBA</h1>
                <h2>Full-Stack Software Engineer</h2>
            </div>
            <div className="p-4 rounded-xl shadow-md shadow-blue-900">
                <Image src={me} alt="Jumbotron" className="rounded-xl h-96 w-80" />
            </div>
            </div>
        </div>
    )
}