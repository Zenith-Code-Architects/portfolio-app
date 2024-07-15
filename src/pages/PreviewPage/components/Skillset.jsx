import React from 'react'
import SkillsetCard from '../../../components/SkillsetCard';
import { HandThumbUpIcon } from "@heroicons/react/24/outline"



const skillset = [
  {
    icon: <HandThumbUpIcon className="h-28"/>,
    title: 'HTML',
    description: 'Beginner',
  },
  {
    icon: 'fas fa-code',
    title: 'React',
    description: 'Intermediate',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Javascript',
    description: 'Advanced',
  },
  {
    icon: 'fas fa-search',
    title: 'GitHub',
    description: 'Expert',
  },
  
];

const Skillset = () => {
  return (
    <section id="Skillset" className="py-12 bg-gray-100">

    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Skills</h2>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillset.map((skillset, index) => (
          <SkillsetCard
            key={index}
            icon={skillset.icon}
            title={skillset.title}
            description={skillset.description}
          />
        ))}
      </div>
    </div>
  </section>
);
};

export default Skillset