import Footer from "@/app/components/Footer";
import "../src/app/globals.css"
import Navbar from "@/app/components/Navbar";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
    return(
        <>
        <div className={inter.className}>
        <div className="text-slate-800">
            <Navbar />
            <p className="text-5xl text-center">My Projects:</p>
            <Footer />
        </div>
        </div>
        </>
    )
}