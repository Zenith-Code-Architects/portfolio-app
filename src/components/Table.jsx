import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Table = () => {
  return (
    <div className='w-full '>
        <table className='block overflow-hidden table-auto border-collapse shadow-[0_10px_10px_#ccc] rounded-lg whitespace-nowrap w-[1000px] max-w-[80%] m-auto overflow-x-auto'>
            <thead className='bg-[#ccc] text-[#222]'>
                <tr>
                    <th className='p-4'>Skills</th>
                    <th className='p-4'>Level Of Proficiency</th>
                    <th className='p-4'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr cls>
                    <td className='p-4 border-t-[0.5px] border-[#ddd] overflow-hidden overflow-ellipsis'>Node Js</td>
                    <td className='p-4'>Expert</td>
                    <td className='p-4' >
                        <span> <TrashIcon width={15} height={15}/> </span>
                        <span> <PencilIcon width={15} height={15}/></span>
                    </td>
                </tr>
                <tr>
                    <td className='p-4'>React Js</td>
                    <td className='p-4'>Expert</td>
                    <td className='p-4'>
                        <span> <TrashIcon width={15} height={15}/> </span>
                        <span> <PencilIcon width={15} height={15}/></span>
                    </td>
                </tr>
                <tr>
                    <td className='p-4'>HTML 5</td>
                    <td className='p-4'>Expert</td>
                    <td className='p-4'>
                        <span> <TrashIcon width={15} height={15}/> </span>
                        <span> <PencilIcon width={15} height={15}/></span>
                    </td>
                </tr>
                <tr>
                    <td className='p-4'>CSS 3</td>
                    <td className='p-4'>Expert</td>
                    <td className='p-4'>
                        <span> <TrashIcon width={15} height={15}/> </span>
                        <span> <PencilIcon width={15} height={15}/></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table