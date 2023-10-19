import "../app/globals.css"
import { Inter } from 'next/font/google'
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogIntro from "./components/BlogIntro";

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
                    <BlogIntro />
                    <Footer />
                </div>
            </div>
        </>
    )
}