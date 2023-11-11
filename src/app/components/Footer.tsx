import Link from "next/link";
import Lastl from "./Lastl";

export default function Footer() {
    return (
        <div className="grid bg-slate-300 dark:bg-gray-950  text-slate-900 dark:text-slate-200 font-semibold items-center justify-center">
            <div>
            <ul className="lg:flex grid text-lg items-center justify-center px-14 py-2 pt-6">
                <li className="px-6 hover:text-blue-600"><Link href="/">Home</Link></li>
                <li className="px-6 hover:text-blue-600"><Link href="/About">About</Link></li>
                <li className="px-6 hover:text-blue-600"><Link href="/Skills">Skills</Link></li>
                <li className="px-6 hover:text-blue-600"><Link href="/Projects">Projects</Link></li>
                <li className="px-6 hover:text-blue-600"><Link href="/Blog">Blog</Link></li>
                <li className="px-6 hover:text-blue-600"><Link href="/Contact">Contact</Link></li>
            </ul>
            </div>
            <div>
            <Lastl />
            </div>
        </div>

    )
}