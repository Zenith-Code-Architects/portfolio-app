import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'

const DashboardLayout = () => {
    return (

        <div className='flex pt-8'>
            <Sidebar />
            <div className='w-full'>
                <Outlet />
            </div>

        </div>





    )
}

export default DashboardLayout
