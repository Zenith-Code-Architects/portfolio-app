import React from 'react'

const BioOverview = ({label, result}) => {
  return (
    <div>
        <div>
              <h2 className="text-xl font-semibold mb-2">{label}</h2>
            <p>{result}</p>
            </div>
    </div>
  )
}

export default BioOverview