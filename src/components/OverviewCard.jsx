import React from 'react'

const OverviewCard = ({ heading, icon, statistics }) => {
    return (
        <>
            <div className='flex flex-col justify-around px-6 py-5 bg-[#ffffff] box-border rounded-md shadow-[0_6px_7px_-4px_rgba(0,0,0,0.2)]'>
                <div className='flex justify-between items-center'>
                    <p className='text-lg'>{heading}</p>
                    <span className='text-xl font-semibold'>{icon}</span>
                </div>
                <span className='text-xl font-semibold'>{statistics}</span>
            </div>
        </>
    )
}

export default OverviewCard