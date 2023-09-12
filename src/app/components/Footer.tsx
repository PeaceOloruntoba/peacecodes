import Link from "next/link";
import Lastl from "./Lastl";

export default function Footer() {
    return(
        <div className="grid">
            <div className="px-14 py-2 bg-slate-300 dark:bg-gray-950 text-slate-900 dark:text-slate-200 font-semibold">
                <ul className="flex items-center justify-center gap-20">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Skills">Skills</Link></li>
                    <li><Link href="/Projects">Projects</Link></li>
                    <li><Link href="/Blog">Blog</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </div>
            <Lastl />
        </div>

    )
}