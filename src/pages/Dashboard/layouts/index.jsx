import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import UserBar from '../../../components/UserBar'

const DashboardLayout = () => {
    return (

        <div className='flex flex-col'>
            <div className=''>
                <Sidebar />
            </div>
            <div className='flex flex-row'>
                <div className='w-4/5 '>
                    <Outlet />
                </div>
                <div>
                    <UserBar />
                </div>

            </div>

        </div>





    )
}

export default DashboardLayout
