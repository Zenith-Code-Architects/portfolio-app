import React from 'react'
import SkillsetCard from '../../../components/SkillsetCard';
import htmlIcon from '../../../assets/images/html5_icon.svg';
import htmlIcon1 from '../../../assets/icons/react_js_icon.png';
import htmlIcon2 from '../../../assets/icons/js_icon.png';



const skillset = [
  {
    icon: htmlIcon,
    title: 'HTML',
    description: 'Beginner', 
  },
  {
    icon: htmlIcon1,
    title: 'React',
    description: 'Intermediate',
  },
  {
    icon: htmlIcon2,
    title: 'Javascript',
    description: 'Advanced',
  },
 
  
];

const Skillset = () => {
  return (
    <section id="Skillset" className="py-12 px-5 bg-gray-100">

    <div className="container mx-auto px-2">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Skills</h2>

      </div>
      <div className="grid  md:grid-cols-3  ">
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