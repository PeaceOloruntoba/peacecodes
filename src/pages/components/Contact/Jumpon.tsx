import Image from "next/image";
import Lang from "./Lang";
import Link from "next/link";
import about from "../../../app/assets/aboutme.jpeg";

export default function Jumpon(){  
  return(
    <div className="flex justify-around items-center lg:px-20 md:px-12 sm:px-6 bg-slate-300 dark:bg-gray-950">
            <div className="bg-slate-200 dark:bg-slate-950 rounded-xl">
           <div className="p-16 px-10 grid gap-5 items-center justify-center">
            <div className="grid gap-5 items-center justify-center text-center">
            <h2 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">Contact me:</h2>
            </div>
        <div className="flex">
        <div className="p-2 grid">
            <Image src={about} alt="Jumbotron" className="rounded-xl w-96" />
            <p>Peace Oloruntoba</p>
            <p>Full-Stack Web Developer / Aspiring Software Engineer</p>
            <p>Please fill the form to send me an official mail,<br />and anticipate a response within 24hrs</p>
            <span>
              
            <p className="text-slate-800 dark:text-zinc-300 py-3 text-xl font-semibold">You can reach me through the following means:</p>
                    <span className="text-slate-800 dark:text-zinc-300 py-2 text-2xl font-semibold flex items-center justify-around">
                        <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiTwitterXFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://wa.me/+2348166846226" target="_blank"><RiWhatsappFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://www.linkedin.com/in/peace-oloruntoba-3a003527a/" target="_blank"><RiLinkedinBoxFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>
                        <Link href="https://twitter.com/PeaceEdgeTech" target="_blank"><RiFacebookBoxFill className="hover:text-3xl cursor-pointer ease-in-out duration-300" /></Link>

                    </span>
            </span>
        </div>
        <div className=" p-2">
          <form action="" className="text-slate-800 dark:text-zinc-300 font-semibold">
            <div className="flex">
              <div className="grid p-2">
            <label htmlFor="">Name:</label>
            <input type="text" className="bg-transparent border border-slate-600 outline-none rounded-lg p-2" />
              </div>
              <div className="grid p-2">
            <label htmlFor="">Phone Number:</label>
            <input type="tel" className="bg-transparent border border-slate-600 outline-none rounded-lg p-2" />
              </div>
            </div>
              <div className="grid p-2">
            <label htmlFor="">Email:</label>
            <input type="email" className="bg-transparent border border-slate-600 outline-none rounded-lg p-2" />
              </div>
              <div className="grid p-2">
            <label htmlFor="">Subject:</label>
            <input type="text" className="bg-transparent border border-slate-600 outline-none rounded-lg p-2" />
              </div>
              <div className="grid p-2">
            <label htmlFor="">Message:</label>
            <textarea name="" id="" className="h-36 bg-transparent border border-slate-600 outline-none rounded-lg p-2">Hi,</textarea>
              </div>
              <div className="p-2">
                <button type="submit" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 p-2 w-full rounded-xl font-semibold text-lg ease-in-out duration-300 text-slate-200">Send Message</button>
              </div>
          </form>
        </div>
        </div>
            </div>
            <div className="flex items-center justify-center px-16">
            <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1"/>
            </div>
            <div className="p-16 grid gap-5 items-center justify-center px-10">
                <Lang />
            </div>
        </div>
        </div>
  )
}
