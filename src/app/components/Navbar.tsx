import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex items-center justify-around bg-slate-200 text-slate-800 font-bold">
            Logo
            <ul className="flex gap-5 p-5">
                <li>
                <Link href="/">Home</Link>
                </li>
                <li>
                <Link href="/About">About</Link>
                </li>
                <li>
                <Link href="/Experience">Experience</Link>
                </li>
                <li>
                <Link href="/Projects">Projects</Link>
                </li>
                <li>
                <Link href="/Blog">Blog</Link>
                </li>
                <li>
                <Link href="/Contact">Contact</Link>
                </li>
            </ul>
            Theme-toggle
        </div>
    )
}