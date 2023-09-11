import Link from "next/link";

export default function Navbar() {
    return(
        <div className="grid items-center justify-center bg-slate-200 text-slate-800 font-bold">
            <ul className="flex gap-5 p-5">
                <li>
                <Link href="/">Home</Link>
                </li>
                <Link href="/">About</Link>
                <Link href="/">Experience</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Contact</Link>
            </ul>
        </div>
    )
}