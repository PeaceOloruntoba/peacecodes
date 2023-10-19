import "../app/globals.css"
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Inter } from 'next/font/google'
import SkillsIntro from "./components/SkillsIntro";
import Head from "next/head";

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