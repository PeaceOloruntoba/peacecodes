import React from 'react';

interface CardProps {
  title: string;
  content: string;
  image: string;
}

const Lang: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg text-center group border shadow ">
      <img src={image} alt={title} className="w-56 h-44 mx-auto rounded-lg" />
      <div className='bottom-0'>
      <p className="text-2xl font-semibold mt-2 text-slate-800 dark:text-zinc-300">{title}</p>
      <p className="text-gray-600 font-semibold mt-1">{content}</p>
      </div>
    </div>
  );
};

export default Lang;
