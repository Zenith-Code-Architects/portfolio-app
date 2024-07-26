import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Loader from './Loader'


const Tile = ({awardName, nameOfInstitution, dateObtained, description, editIcon, trashIcon, deleteOnclick}) => {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5 relative">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Achievement</h2>
          <div>
            <button className="text-gray-500 hover:text-gray-700 mr-2">
              {editIcon}
            </button>
            <button className="text-red-500 hover:text-red-700"
            onClick={deleteOnclick}>
              { isDeleting ? <Loader/> : trashIcon}
            </button>
          </div>
        </div>


        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Award Name
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            {awardName}
          </div>
        </div>


        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Name of Institution
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            {nameOfInstitution}
          </div>
        </div>


        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Date Obtained
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            {dateObtained}
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
            src=""
            alt="Achievement Image"
            className="mt-4 rounded"
          />
        </div>


        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </span>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tile



