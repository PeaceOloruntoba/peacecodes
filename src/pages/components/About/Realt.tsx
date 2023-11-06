import React from 'react';
import WorkExperience from './WorkExperience';

const workExperienceData = [
  {
    jobTitle: 'Software Engineer',
    company: 'TechCo',
    date: 'January 2020 - Present',
    description: 'Developed web applications using React and Node.js.',
  },
  {
    jobTitle: 'Intern',
    company: 'Startup Inc.',
    date: 'May 2019 - December 2019',
    description: 'Assisted in various projects and gained experience in web development.',
  },
  // Add more work experience items here
];

const Realt: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">My Work Experience</h1>
      <WorkExperience experienceData={workExperienceData} />
    </div>
  );
};

export default Realt;
