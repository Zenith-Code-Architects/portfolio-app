import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import D from "../constants"
import "../App.css"
import ZcaLogo from "../assets/images/dashboard-logo.jpg"
import { apiLogout } from "../services/auth"
import { toast } from "react-toastify"
import { LogOut } from "lucide-react"


const Sidebar = () => {
    const { pathname } = useLocation()
    const paths = pathname.split("/")
    const currentPath = paths[2];

    const navigate = useNavigate();

    const logout = async () => {
        try {
            await apiLogout();
            toast.success("Logged out successfully");
            navigate("/login");
        } catch (error) {
            toast.error("An error occured")
        }
    };

    return (
        <>
            <div className=" ml-3 text-black flex flex-col relative h-screen overflow-y-hidden overflow-x-hidden w-16 hover:w-52 transition-width" style={{ boxShadow: '10px 0 #0db75f' }}>
                <div className="flex items-center justify-between border-b-2">
                    <img src={ZcaLogo} alt="zca-logo"
                        className="w-1/2" />
                </div>
                <div className="flex flex-col mt-4">
                    {D.DASHBOARDLINKS.map(
                        (item, index) => {
                            return (
                                <NavLink key={index}
                                    to={item.path}
                                    id="nav"
                                    className={` flex items-center hover:shadow-lg 
                        
                        ${currentPath == item.path && "bg-primary text-white rounded-l-[20px]"}`}>

                                    <span className="relative text-center pl-4 min-w-14">
                                        {item.Icon}
                                    </span>
                                    <span className="relative pl-2 w-full whitespace-nowrap leading-[40px]">{item.name}</span>
                                </NavLink>)
                        }
                    )

                    }
                </div>
                <button className="flex gap-x-4 items-center mt-auto hover:bg-primary hover:text-white hover:shadow-lg"
                    onClick={logout}>
                    <span className="bg-white text-black p-2 rounded-full">
                        <LogOut />
                        <span>Logout</span>
                    </span>
                </button>
            </div>
        </>
    )
}

export default Sidebar

