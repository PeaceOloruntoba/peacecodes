import Link from "next/link";
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiTwitterXFill, RiWhatsappFill } from "react-icons/ri";

export default function Lastl() {
    return (
        <div className="flex items-center justify-between py-2 pt-6">
            <span>Copyright © 2023 <Link href="/" className="text-blue-600">Peace Oloruntoba</Link></span>
            <span className="flex gap-5 text-xl">
                <Link href="https://twitter.com/PeaceEdgeTech"><RiTwitterXFill /></Link>
                <Link href="https://www.linkedin.com/in/peace-oloruntoba-3a003527a/"><RiLinkedinBoxFill /></Link>
                <Link href="https://wa.me/+2348166846226"><RiWhatsappFill /></Link>
                <Link href="https://wa.me/+2348166846226"><RiFacebookBoxFill /></Link>
            </span>
        </div>
    )
}