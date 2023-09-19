import Footer from "@/app/components/Footer";
import "../app/globals.css"
import Navbar from "@/app/components/Navbar";
import { Inter } from 'next/font/google'
import ContactIntro from "./components/ContactIntro";

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return(
        <>
        <div className={inter.className}>
        <div className="text-slate-800">
            <Navbar />
            <ContactIntro />
            <Footer />
        </div>
        </div>
        </>
    )
}