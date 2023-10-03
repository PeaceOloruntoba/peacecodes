import Lang from "./Lang";

const cardData = [
    {
      title: "HTML",
      content: "<>The skeleton of web dev</>",
      image: "/assets/me.jpg",
    },
    {
      title: "CSS",
      content: "Cascading Styling Sheet",
      image: "/assets/me.jpg",
    },
    {
      title: "JavaScript",
      content: "React, Next, Vue, Nuxt",
      image: "/assets/me.jpg",
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
    {
      image: "/assets/me.jpg",
      title: "Flutter",
      content: "Cross-platform development",
    },
    {
      image: "/assets/me.jpg",
      title: "C/C++",
      content: "Software Development",
    },
  ];

export default function Jumpon(){
    return(
        <div>
            <h1 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">Folio:</h1>
            <p className="text-lg fint-semibold text-slate-800 dark:text-zinc-300">I am an expert using the following development tools:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
            <Lang key={index} title={card.title} content={card.content} image={card.image} />
            ))}
            </div>
        </div>
    )
}