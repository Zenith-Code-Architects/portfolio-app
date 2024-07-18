import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

const BioCards = ({ name, value }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
      <div>
        <h3 className="text-sm font-semibold text-gray-600">{name}</h3>
        <p className="text-lg font-medium text-gray-900">{value}</p>
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

export default BioCards;
