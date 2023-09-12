import Link from "next/link";
import Lastl from "./Lastl";

export default function Footer() {
    return(
        <div className="grid">
            <div className="flex">
                <ul className="flex items-center justify-center gap-10">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Skills</Link></li>
                    <li><Link href="/">Projects</Link></li>
                    <li><Link href="/">Blog</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
            </div>
            <Lastl />
        </div>

    )
}