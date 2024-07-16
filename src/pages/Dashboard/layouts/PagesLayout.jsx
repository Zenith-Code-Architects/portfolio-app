import { PlusCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
    return (
        <div className='pt-3 flex flex-col gap-y-16 w-full'>
            <div className='flex justify-between w-full'>
                <h1 className='text-3xl font-bold'>{headerText}</h1>
                <button className='text-white bg-primary px-6 py-2 flex items-center gap-x-2 rounded-full drop-shadow-md' onClick={onClick}><PlusCircleIcon width={20} height={20} />{buttonText}</button>
            </div>
            <div className=''>{children}</div>
        </div>
    )
}

export default PagesLayout