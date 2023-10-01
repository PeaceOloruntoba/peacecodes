import Lang from "./Lang";

const cardData = [
    {
      title: "Micheal Gough",
      content: "CEO at Google",
      image: "/assets/me.jpg",
    },
    {
      title: "Micheal Gough",
      content: "CEO at Google",
      image: "/assets/me.jpg",
    },
    {
      title: "Micheal Gough",
      content: "CEO at Google",
      image: "/assets/me.jpg",
    },
    {
      image: "/assets/me.jpg",
      title: "Micheal Jordan",
      content: "CEO at Microsoft",
    },
    {
      image: "/assets/me.jpg",
      title: "Micheal Jordan",
      content: "CEO at Microsoft",
    },
    {
      image: "/assets/me.jpg",
      title: "Micheal Jordan",
      content: "CEO at Microsoft",
    },
    {
      image: "/assets/me.jpg",
      title: "Micheal Jordan",
      content: "CEO at Microsoft",
    },
    {
      image: "/assets/me.jpg",
      title: "Micheal Jordan",
      content: "CEO at Microsoft",
    },
  ];

export default function Jumpon(){
    return(
        <div>
            <h1 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">Skills and Expertise:</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cardData.map((card, index) => (
            <Lang key={index} title={card.title} content={card.content} image={card.image} />
            ))}
            </div>
        </div>
    )
}