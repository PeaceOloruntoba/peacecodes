import Footer from "@/app/components/Footer";
import "../app/globals.css"
import Navbar from "@/app/components/Navbar";
import { Inter } from 'next/font/google'
import ProjectsIntro from "./components/ProjectsIntro";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
    return(
        <>
        <div className={inter.className}>
        <Head>
        <title>Peace Oloruntoba - Folio</title>
      </Head>
        <div className="text-slate-800">
            <Navbar />
            <ProjectsIntro />
            <Footer />
        </div>
        </div>
        </>
    )
}