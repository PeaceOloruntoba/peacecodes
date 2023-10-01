import React from 'react';

interface CardProps {
  title: string;
  content: string;
  image: string;
}

const Lang: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg text-center group">
      <img src={image} alt={title} className="w-16 h-16 mx-auto rounded-full" />
      <p className="text-2xl font-semibold mt-4 ">{title}</p>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
};

export default Lang;