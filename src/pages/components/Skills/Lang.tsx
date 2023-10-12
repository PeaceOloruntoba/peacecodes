import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  content: string;
  image: string;
}

const Lang: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <div className="rounded-lg shadow-lg text-center group">
      <Image src={image} alt={title} width="100" height="32" className="w-full h-32 mx-auto rounded-t-lg group-hover:scale-105 ease-in-out duration-300" />
      <div className='pb-4 px-2'>
      <p className="text-xl font-semibold mt-4 text-slate-800 dark:text-zinc-300 group-hover:text-2xl ease-in-out duration-300">{title}</p>
      <p className="text-gray-600 mt-2 group-hover:text-lg ease-in-out duration-300">{content}</p>
      </div>
    </div>
  );
};

export default Lang;
