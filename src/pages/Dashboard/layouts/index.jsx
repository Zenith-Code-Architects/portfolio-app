import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import { getDetails} from '../../../services/config';
import NavBar from '../../../components/NavBar';


const DashboardLayout = () => {
  const [user, setUser] = useState();

  const { token, firstName, lastName, userName } = getDetails();

  useEffect(() => {
    if (token) {
      setUser ({
        firstName,
        lastName,
        userName,
      })
    }
  }, []);


  if (!token) {
    return <Navigate to="/login" />;
  }


  return (
    <div className='flex h-screen'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='w-full overflow-y-auto pl-3'>
        <NavBar user={user} />
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  )
}

export default DashboardLayout;