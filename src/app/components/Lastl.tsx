import Link from "next/link";

export default function Lastl() {
    return(
        <div className="flex items-center justify-between py-2 pt-6">
            <span>Copyright © 2023 <Link href="/" className="text-blue-600">Peace Oloruntoba</Link></span>
            <span className="hidden lg:block">Social icons goes here</span>
        </div>
    )
}