import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

const BioOverview = ({ label, result }) => {
  return (
    <div className="flex items-start justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-700">{label}</h3>
        <p className="text-md text-gray-900 mt-2">{result}</p>
      </div>
      <div className="flex space-x-2">
        <button className="text-blue-500 hover:text-blue-700">
          <PencilIcon width={20} />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <TrashIcon width={20} />
        </button>
      </div>
    </div>
  );
};

export default BioOverview;
