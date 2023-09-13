import Image from "next/image";
import me from "../assets/2021me.jpg"

export default function Intro() {
    return(
        <>
        <div className="flex justify-around items-center">
            <div className="grid">
                <h1>PEACE OLORUNTOBA</h1>
                <h2>Full-Stack Software Engineer</h2>
            </div>
            <div className="p-4 rounded-xl shadow-sm shadow-blue-900">
                <Image src={me} alt="Jumbotron" className="rounded-xl" />
            </div>
        </div>
        </>
    )
}