import React from 'react'

const BioCards = ({name, value}) => {
  return (
    <div>
        <div className='flex'>
            <p className='w-32 font-bold'>{name}</p>
            <span className='flex-1 border border-gray-700 px-3 py-1 rounded-md'>{value}</span>
          </div>
    </div>
  )
}

export default BioCards