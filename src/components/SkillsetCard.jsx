import React from 'react';

export default function SkillsetCard({ icon, title, description }) 
    {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
        <div className="flex items-center justify-center mb-4">
          <i className={`text-4xl ${icon}`}></i>
        </div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    );
  };
  
 