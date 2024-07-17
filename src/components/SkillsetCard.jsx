import React from 'react';

export default function SkillsetCard({ icon, title, description }) 
    {
    return (
      <div className=" w-[500px] h-[300px] rounded overflow-hidden shadow-lg p-6 bg-white">
        <div className="flex items-center justify-center mb-4">
          <i className=""></i>
        </div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    );
  };
  
 