import React from 'react'

const NavBar = () => {
    return (
        <>
            <div>

                <nav className='border-b shadow-sm bg-[#fff] py-2 px-4'>
                    <ul className='no-underline flex justify-between'>
                        <div className=''>
                            <li className='text-sm text-primary' >Primary</li>
                            <h1 className='no-underline font-bold text-primary'>Dashboard</h1>
                        </div>
                        <li className='border-2 p-2 rounded-full'>MB</li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default NavBar