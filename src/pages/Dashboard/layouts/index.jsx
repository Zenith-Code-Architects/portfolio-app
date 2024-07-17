import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import NavBar from '../../../components/NavBar'

const DashboardLayout = () => {
    return (
        <>
            <div className='flex bg-[#fafdf6]'>
                <div className=''>
                    <Sidebar />
                </div>
                <div className='w-full mx-5'>
                    <Outlet />
                </div>

            </div>
        </>





    )
}

export default DashboardLayout
