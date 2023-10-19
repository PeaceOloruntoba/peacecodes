import "../app/globals.css"
import { Inter } from 'next/font/google'
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SkillsIntro from "./components/SkillsIntro";

const inter = Inter({ subsets: ['latin'] })

export default function Skills() {
    return (
        <>
            <div className={inter.className}>
                <Head>
                    <title>Peace Oloruntoba - Skills</title>
                </Head>
                <div className="">
                    <Navbar />
                    <SkillsIntro />
                    <Footer />
                </div>
            </div>
        </>
    )
}