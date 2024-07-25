import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import { getToken } from '../../../services/config';
import { apiGetProfile } from '../../../services/profile';
import { toast } from 'react-toastify';
import NavBar from '../../../components/NavBar';


const DashboardLayout = () => {
  const [profile, setProfile] = useState();
  const token = getToken();

  const getUserProfile = async () => {
    try {
      const response = await apiGetProfile();
      const userProfileData = response?.data.profile;
      setProfile(userProfileData);
    } catch (error) {
      toast.error("An error occured");
    }
  };

  useEffect(() => {
    if (token) {
      getUserProfile();
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
          <NavBar user={profile}/>
          <Outlet context={[profile, setProfile]}/>
        </div>
      </div>
  )
}

export default DashboardLayout;