import "../app/globals.css"
import { Inter } from 'next/font/google'
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
    return (
        <>
            <div className={inter.className}>
                <Head>
                    <title>Peace Oloruntoba - Blog</title>
                </Head>
                <div className="text-slate-800">
                    <Navbar />
                    <div className="grid bg-slate-300 px-32 dark: dark:bg-gray-950">
                        <div className="grid text-slate-800 dark:text-zinc-300 bg-slate-200 dark:bg-slate-950 font-semibold text-4xl px-12 py-96 rounded-xl">
                            <span>Blog:</span>
                            <span>Coming Soon...</span>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}