import Image from "next/image";
import about from "../assets/homeabout.jpeg"
import Link from "next/link";

export default function Blogging () {
    return(
        <div>
        <div className="p-16 px-10 grid gap-5 items-center justify-center">
            <div className="flex gap-5 items-center justify-center">
            <h2 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">Articles:</h2>
            </div>
        <div className="shadow p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-xl m-4">
        <Image src={about} alt="Jumbotron" className="rounded-t-xl w-full" />
        <div className="p-5">
        <span className="font-semibold text-slate-800 dark:text-zinc-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium nostrum corrupti. Est fugiat quae ex, atque minima sint consequatur commodi? <Link href="/" className="text-purple-500">Learn More...</Link></span>
        </div>
        </div>
        <div className="border rounded-xl m-4">
        <Image src={about} alt="Jumbotron" className="rounded-t-xl w-full" />
        <div className="p-5">
        <span className="font-semibold text-slate-800 dark:text-zinc-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium nostrum corrupti, atque minima sint consequatur commodi? <Link href="/" className="text-purple-500">Learn More...</Link></span>
        </div>
        </div>
        <div className="border rounded-xl m-4">
        <Image src={about} alt="Jumbotron" className="rounded-t-xl w-full" />
        <div className="p-5">
        <span className="font-semibold text-slate-800 dark:text-zinc-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis numquam. Est fugiat quae ex, atque minima sint consequatur commodi? <Link href="/" className="text-purple-500">Learn More...</Link></span>
        </div>
        </div>

        </div>
        <div className="flex items-center justify-center">
            <Link href="/Blog">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold p-4 text-xl px-10 rounded-lg">More &gt;&gt;</button>
            </Link>
        </div>
            </div>
            <div className="flex items-center justify-center px-16">
            <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1"/>
            </div>
    </div>
    )
}