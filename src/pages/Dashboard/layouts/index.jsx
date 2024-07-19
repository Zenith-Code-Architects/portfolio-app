import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'


const DashboardLayout = () => {
    return (
        <>
            <div className='flex h-screen'>
                <div className=''>
                    <Sidebar />
                </div>
                <div className='w-full overflow-y-auto pl-3'>
                    <Outlet />
                </div>

            </div>
        </>





    )
}

export default DashboardLayout
