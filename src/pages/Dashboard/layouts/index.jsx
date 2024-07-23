import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import { getToken } from '../../../services/config';
import { apiGetProfile } from '../../../services/profile';
import { toast } from 'react-toastify';


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
    
      const getAvatar = () => {
        if (!profile) return "N/A";
        const initials = `${profile.firstName[0]}${profile.lastName[0]}`;
        return initials.toUpperCase();
      };


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

export default DasboardLayout;