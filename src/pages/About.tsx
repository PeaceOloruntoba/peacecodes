import "../app/globals.css"
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

import { Inter } from 'next/font/google'
import AboutIntro from "./components/AboutIntro";
import Head from "next/head";

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
