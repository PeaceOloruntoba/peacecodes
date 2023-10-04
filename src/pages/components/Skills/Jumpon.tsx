import Lang from "./Lang";

const cardData = [
    {
      title: "HTML",
      content: "</>",
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
      image: "/assets/me.png",
      title: "TypeScript",
      content: "Next, Angular",
    },
    {
      image: "/assets/me.png",
      title: "Python",
      content: "Django, Flask",
    },
    {
      image: "/assets/me.png",
      title: "PHP",
      content: "Core PHP, Laravel",
    },
    {
      image: "/assets/me.png",
      title: "Flutter",
      content: "Cross-platform dev",
    },
    {
      image: "/assets/me.png",
      title: "Kotlin",
      content: "Android Development",
    },
    {
      image: "/assets/me.png",
      title: "C/C++",
      content: "Software Development",
    },
    {
      image: "/assets/me.png",
      title: "Golang",
      content: "Software Development",
    },
    {
      image: "/assets/me.png",
      title: "Solidity",
      content: "Blockchain Development",
    },
  ];

export default function Jumpon(){
    return(
        <div>
            <h1 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">Skills and Expertise:</h1>
            <p className="py-2 text-lg text-slate-700 dark:text-zinc-400">I am an expert using the following development tools:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
            {cardData.map((card, index) => (
            <Lang key={index} title={card.title} content={card.content} image={card.image} />
            ))}
            </div>
        </div>
    )
}