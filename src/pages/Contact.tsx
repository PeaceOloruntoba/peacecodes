import "../app/globals.css"
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Inter } from 'next/font/google'
import ContactIntro from "./components/ContactIntro";
import Head from "next/head";

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