import Image from "next/image";
import Link from "next/link";
import about from "../../app/assets/aboutme.jpeg"

export default function AboutIntro() {
    return(
        <div className="flex justify-around items-center lg:px-20 md:px-12 sm:px-6 dark:bg-gray-950">
            <div className="bg-slate-200 dark:bg-slate-950 rounded-xl">
           <div className="p-16 px-10 grid gap-5 items-center justify-center">
            <div className="grid gap-5 items-center justify-center text-center">
            <h2 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">About me:</h2>
            <Image src={about} alt="Jumbotron" className="rounded-xl w-96" />
            </div>
        <div className="">
            <p className="text-xl font-semibold text-slate-800 dark:text-zinc-300 mb-8">I am <span className="text-blue-500 font-bold">Peace Oloruntoba</span>, a dedicated Computer Science student at <Link href="https://aul.edu.ng/" className="text-purple-500">Anchor University, Lagos, Nigeria</Link>, on a mission to transform my passion for technology into innovative solutions. As an aspiring Software Engineer, I&apos;ve honed my skills over the past two years and am proficient in web development, while also venturing into the exciting world of mobile development. My journey in the field of software development has been marked by a relentless pursuit of knowledge and an unwavering commitment to pushing the boundaries of what&apos;s possible in the realm of technology.</p>
            <p className="text-xl font-semibold text-slate-800 dark:text-zinc-300 mb-8">My enthusiasm for coding goes beyond the classroom, as I am a passionate developer who thrives on the challenges presented by the ever-evolving IT landscape. I have an insatiable curiosity that drives me to continuously explore new technologies, making me well-versed in the latest industry trends. This curiosity has led me to dive into blockchain development, a fascinating and cutting-edge field that I&apos;ve been actively exploring for the past few weeks.</p>
            <p className="text-xl font-semibold text-slate-800 dark:text-zinc-300">I firmly believe that technology has the power to shape the future, and I am determined to be at the forefront of this transformative journey. Whether it&apos;s crafting elegant web applications, delving into the intricacies of mobile app development, or exploring the decentralized world of blockchain, I am committed to creating meaningful solutions that improve the lives of individuals and businesses alike.</p>
        </div>
            </div>
            <div className="flex items-center justify-center px-16">
            <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1"/>
            </div>
            <div className="p-16 grid gap-5 items-center justify-center px-10">
                Experience: 
            </div>
        </div>
        </div>
    )
}
