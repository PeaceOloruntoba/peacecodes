import Footer from "@/app/components/Footer";
import "../app/globals.css"
import Navbar from "@/app/components/Navbar";
import { Inter } from 'next/font/google'
import SkillsIntro from "./components/SkillsIntro";

const inter = Inter({ subsets: ['latin'] })

export default function Skills() {
    return(
        <>
        <div className={inter.className}>
        <div className="text-slate-800">
            <Navbar />
            <p className="text-5xl text-center">Skill and Expertise:</p>
            <SkillsIntro />
            <Footer />
        </div>
        </div>
        </>
    )
}