import "../app/globals.css"
import { Inter } from 'next/font/google'
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactIntro from "./components/ContactIntro";

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <>
            <div className={inter.className}>
                <Head>
                    <title>Peace Oloruntoba - Contact</title>
                </Head>
                <div className="text-slate-800">
                    <Navbar />
                    <ContactIntro />
                    <Footer />
                </div>
            </div>
        </>
    )
}