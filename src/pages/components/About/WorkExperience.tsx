import React from 'react';

interface WorkExperienceProps {
  experienceData: Array<WorkItem>;
}

interface WorkItem {
  jobTitle: string;
  company: string;
  date: string;
  description: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experienceData }) => {
  return (
    <div className="flex flex-col space-y-6">
      {experienceData.map((item, index) => (
        <div key={index} className="relative">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{item.jobTitle}</h3>
            <p className="text-gray-600">{item.company}</p>
            <p className="text-gray-600">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
          {index !== experienceData.length - 1 && (
            <div className="w-0.5 bg-gray-300 absolute top-4 left-1/2 transform -translate-x-1/2 h-16"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
