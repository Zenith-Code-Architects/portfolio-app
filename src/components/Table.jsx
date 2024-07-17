import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Table = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Skills</th>
                    <th>Level Of Proficiency</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Node Js</td>
                    <td>Expert</td>
                    <td>
                        <span> <TrashIcon width={15} height={15}/> </span>
                        <span> <PencilIcon width={15} height={15}/></span>
                    </td>
                </tr>
                <tr>
                    <td>React Js</td>
                    <td>Expert</td>
                    <td>
                        <span> <TrashIcon width={15} height={15}/> </span>
                        <span> <PencilIcon width={15} height={15}/></span>
                    </td>
                </tr>
                <tr>
                    <td>HTML 5</td>
                    <td>Expert</td>
                    <td>
                        <span> <TrashIcon width={15} height={15}/> </span>
                        <span> <PencilIcon width={15} height={15}/></span>
                    </td>
                </tr>
                <tr>
                    <td>CSS 3</td>
                    <td>Expert</td>
                    <td>
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