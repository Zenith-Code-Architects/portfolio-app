import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import React from 'react'


const Tile = () => {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Achievement</h2>
          <div>
            <button className="text-gray-500 hover:text-gray-700 mr-2">
              <PencilIcon className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Award Name
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            Award name goes here
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Name of Issuing Organization
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            Issuing organization name goes here
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Date Obtained
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            Date goes here
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Image of Achievement
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            <input
              type="file"
              id="achievement-image"
              name="achievement-image"
              className="w-full"
            />
          </div>
          <img
            src="#"
            alt="Achievement Image"
            className="mt-4 rounded"
            style={{ display: 'none' }}
          />
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            Description goes here
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tile



