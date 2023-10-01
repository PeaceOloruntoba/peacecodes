import Footer from "@/app/components/Footer";
import "../app/globals.css"
import Navbar from "@/app/components/Navbar";
import { Inter } from 'next/font/google'
import BlogIntro from "./components/BlogIntro";

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
    return(
        <>
        <div className={inter.className}>
        <div className="text-slate-800">
            <Navbar />
            <BlogIntro />
            <Footer />
        </div>
        </div>
        </>
    )
}