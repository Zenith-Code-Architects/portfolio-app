import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div>

                <nav className='border-b shadow-sm rounded-b bg-[#fff] py-2 px-4'>
                    <ul className='no-underline flex justify-between'>
                        <div className=''>
                            <li className='text-sm' >Primary</li>
                            <h1 className='no-underline font-bold text-primary'>Dashboard</h1>
                        </div>
                        <div className='flex flex-row items-center gap-x-4'>
                            <li className='border-2 p-2 rounded-full'>MB</li>
                            <li><Link to="/preview">Preview</Link></li>
                        </div>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default NavBar