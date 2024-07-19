import React from 'react'
import { BadgeIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const SkillsCard = () => {
  
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="flex items-center mb-4">
        <BadgeIcon className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-bold">Award Title</h2>
      </div>
      <p className="text-sm mb-2">Description of the award goes here.</p>
      <img src="https://via.placeholder.com/150" alt="Award" className="w-full h-32 object-cover mb-2" />
      <div className="flex items-center mb-2">
        <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
        <p className="text-sm">Date Obtained: January 1, 2024</p>
      </div>
      <div className="flex items-center">
        <BuildingOfficeIcon className="h-5 w-5 text-gray-500 mr-2" />
        <p className="text-sm">Organization: Example Organization</p>
      </div>
    </div>
};


export default SkillsCard