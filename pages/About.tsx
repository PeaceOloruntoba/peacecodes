import Footer from "@/app/components/Footer";
import "../src/app/globals.css"
import Navbar from "@/app/components/Navbar";

import { Inter } from 'next/font/google'
import AboutIntro from "./components/AboutIntro";

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return(
        <>
        <div className={inter.className}>
        <div className="text-slate-800 dark:text-zinc-300 bg-slate-200 dark:bg-slate-950">
            <Navbar />
            <p className="text-5xl text-center">About Me:</p>
            <AboutIntro />
            <Footer />
        </div>
        </div>
        </>
    )
}