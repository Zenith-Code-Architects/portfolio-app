import React from 'react';
import techBg from '../../../assets/images/stairs-image.jpg';
import techBg1 from '../../../assets/images/imageai.jpg';
import techBg2 from '../../../assets/images/sign-up-bg1.jpg';
import techBg3 from '../../../assets/images/wlc-image.jpg';
import techBg4 from '../../../assets/images/code-image.jpg';
import techBg5 from '../../../assets/images/developer-code.jpg';



// import other images as needed

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for project 1',
      imageUrl: techBg,
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      imageUrl: techBg1, 
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      imageUrl: techBg2, 
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      imageUrl: techBg3, 
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      imageUrl: techBg4,
      
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      imageUrl: techBg5, 
    },
    
    // Add more projects as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="  rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"/>
              <div className="p-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
