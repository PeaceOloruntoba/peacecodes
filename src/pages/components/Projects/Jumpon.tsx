import Link from "next/link";
import Lang from "./Lang";

const cardData = [
  {
    title: "Student Study Portal",
    image: "/assets/me.png",
    content: "Python, Django, SQLite",
  },
  {
    title: "Easing Life Website",
    image: "/assets/me.png",
    content: "TypeScript, NextJS, TailwindCSS",
  },
  {
    title: "Easy Ride",
    image: "/assets/me.png",
    content: "Flutter, Next, TailwindCSS",
  },
  {
    title: "Gym Management System",
    image: "/assets/me.jpg",
    content: "Python, Django, Redux",
  },
  {
    title: "Easy Food Order Website",
    image: "/assets/me.jpg",
    content: "JavaScript, React, NodeJS",
  },
  {
    title: "Real Estate Management System",
    image: "/assets/me.jpg",
    content: "PHP, Laravel, Symphony",
  },
];

export default function Jumpon() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">Folio:</h1>
      <p className="text-lg py-1 text-slate-700 dark:text-zinc-400">Here are some interesting projects I&apos;ve worked on:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {cardData.map((card, index) => (
          <Lang key={index} title={card.title} content={card.content} image={card.image} />
        ))}
      </div>
      <p className="py-3 text-slate-700 dark:text-zinc-400 text-lg">You can find some more projects I&apos;ve worked on <Link href="https://github.com/PeaceOloruntoba" target="_blank" className="text-purple-500">here</Link>.</p>
    </div>
  )
}
