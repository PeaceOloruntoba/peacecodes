import Link from "next/link";
import Lang from "./Lang";

const cardData = [
  {
    title: "HTML",
    content: "<>The skeleton of web dev</>",
    image: "/assets/me.png",
  },
  {
    title: "CSS",
    content: "Cascading Styling Sheet",
    image: "/assets/me.png",
  },
  {
    title: "JavaScript",
    content: "React, Next, Vue, Nuxt",
    image: "/assets/me.png",
  },
  {
    image: "/assets/me.jpg",
    title: "TypeScript",
    content: "Next, Angular",
  },
  {
    image: "/assets/me.jpg",
    title: "Python",
    content: "Django, Flask",
  },
  {
    image: "/assets/me.jpg",
    title: "PHP",
    content: "Core PHP, Laravel",
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
      <p className="py-3 text-slate-700 dark:text-zinc-400 text-lg">You can find some more projects I&apos;ve worked on <Link href="https://github.com/PeaceOloruntoba" className="text-purple-500">here</Link>.</p>
    </div>
  )
}
