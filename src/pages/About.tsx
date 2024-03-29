import "../app/globals.css"
import { Inter } from 'next/font/google'
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutIntro from "./components/AboutIntro";

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <>
            <div className={inter.className}>
                <Head>
                    <title>Peace Oloruntoba - About</title>
                </Head>
                <div className="text-slate-800 dark:text-zinc-300 bg-slate-200 dark:bg-slate-950">
                    <Navbar />
                    <AboutIntro />
                    <Footer />
                </div>
            </div>
        </>
    )
}
