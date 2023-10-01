import Image from 'next/image';
import React from 'react';

interface TestimonyProps {
    avatar: string;
    author: string;
    company: string;
}

const SkillsCard: React.FC<TestimonyProps> = ({ author, company, avatar }) => {
  return (
    <div className="p-14 border rounded-lg shadow-lg bg-white items-center justify-center text-center mt-14">
      <div className="grid items-center mt-4 justify-center text-center">
        <div className='m-2 flex items-center justify-center'>
        <Image src={avatar} alt={author} width="66" height="66" className="rounded-full" />
        </div>
          <p className="text-gray-900 font-semibold">{author}</p>
          <p className="text-gray-600">{company}</p>
        <div className="grid items-center justify-center">
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
