import { Link, Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import { SquareMenu } from "lucide-react";
import { apiGetBio } from "../../../services/bio";
import { useEffect, useState } from "react";
import { getToken } from "../../../services/config";
import { toast } from "react-toastify";

const DasboardLayout = () => {
  const [bio, setBio] = useState();

  const token = getToken();

  const getUserBio = async () => {
    try {
      const response = await apiGetBio();
      const userBioData = response?.data.bio;
      setBio(userBioData);
    } catch (error) {
      toast.error("An error occured");
    }
  };

  useEffect(() => {
    if (token) {
      getUserBio();
    }
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const getAvatar = () => {
    if (!bio) return "N/A";
    const initials = `${bio.firstName[0]}${bio.lastName[0]}`;
    return initials.toUpperCase();
  };

  return (
    <div className="flex bg-[#F3F4F7]">
      <Sidebar />
      <div className=" w-full">
        <div className="flex px-16 bg-white py-5 shadow items-center">
          <span className="p-3 bg-pink text-white rounded-full shadow-md hover:bg-white hover:text-pink">
            <SquareMenu className="size-8" />
          </span>
          <Link
            to="/dashboard/bio"
            className="ml-auto bg-pink p-4 rounded-full cursor-pointer"
          >
            <span className="text-xl font-semibold text-white">
              {getAvatar()}
            </span>
          </Link>
        </div>
        <Outlet context={[bio, setBio]} />
      </div>
    </div>
  );
};

export default DasboardLayout;