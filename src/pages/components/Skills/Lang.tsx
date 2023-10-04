import React from 'react';

interface CardProps {
  title: string;
  content: string;
  image: string;
}

const Lang: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <div className="rounded-lg shadow-lg text-center group">
      <img src={image} alt={title} className="w-full h-32 mx-auto rounded-t-lg" />
      <div className='pb-4'>
      <p className="text-2xl font-semibold mt-4 text-slate-800 dark:text-zinc-300">{title}</p>
      <p className="text-gray-600 font-semibold mt-2">{content}</p>
      </div>
    </div>
  );
};

export default Lang;
