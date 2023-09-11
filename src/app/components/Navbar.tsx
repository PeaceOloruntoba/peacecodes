import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex items-center justify-center bg-slate-200 text-slate-800 font-bold">
            Logo
            <ul className="flex gap-5 p-5">
                <li>
                <Link href="/">Home</Link>
                </li>
                <li>
                <Link href="/">About</Link>
                </li>
                <li>
                <Link href="/">Experience</Link>
                </li>
                <li>
                <Link href="/">Projects</Link>
                </li>
                <li>
                <Link href="/">Blog</Link>
                </li>
                <li>
                <Link href="/">Contact</Link>
                </li>
            </ul>
            Theme-toggle
        </div>
    )
}