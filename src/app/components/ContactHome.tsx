import Image from "next/image";
import about from "../../app/assets/aboutme.jpeg"


export default function ContactHome(){
    return(
        <div className="grid items-center justify-center p-10">
            <h1 className="font-bold text-4xl text-slate-800 dark:text-zinc-300">Contact:</h1>
            <div className="flex p-16 items-center justify-around rounded-xl shadow shadow-blue-600">
                <div className="">
                    <Image src={about} alt="Contact" />
                </div>
                <div>
                    Social Icons
                </div>
            </div>
        </div>
    )
}