import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import NavBar from '../../../components/NavBar'

const DashboardLayout = () => {
    return (
        <>
            <div className='flex '>
                <div className=''>
                    <Sidebar />
                </div>
                <div className='w-full pl-3 bg-[#fafdf6]'>
                    <Outlet />
                </div>

            </div>
        </>





    )
}

export default DashboardLayout
