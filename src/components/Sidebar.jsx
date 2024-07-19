import { Link, useLocation } from "react-router-dom"
import D from "../constants"
import "../App.css"
import ZcaLogo from "../assets/images/dashboard-logo.jpg"
import { useState } from "react"


const Sidebar = () => {
const {pathname}= useLocation()
const paths = pathname.split("/")
const currentPath = paths[2]

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
                        <Link key={index}
                         to={item.path} 
                        id="nav"
                        className={` flex items-center hover:shadow-lg 
                        
                        ${ currentPath == item.path && "bg-primary text-white rounded-l-[20px]" }` }>
                            
                            <span className="relative text-center pl-4 min-w-14"> 
                            {item.Icon}
                            </span>  
                            <span className="relative pl-2 w-full whitespace-nowrap leading-[40px]">{item.name}</span>
                            </Link>)
                    }
                )

                }
                </div>
                </div> 
        </>
    )
}

export default Sidebar

// <> className={`flex gap-x-2 w-40 px-5 py-3 rounded-2xl shadow border hover:border-[1.5px] hover:bg-primary hover:text-white hover:shadow-lg ${ currentPath == item.path && "bg-primary text-white" }` }>
{/* <span > 
{item.Icon}
</span>  
<span>{item.name}</span>
</Link>)
} */}
        //     <div className='h-screen w-[200px] bg-primary text-white'>
        //         <div className=''>
        //             Logo here
        //         </div>
        //         <div className='flex items-center h-12 mt-auto'>
        //            <Link to=''><HomeIcon width={20} height={20} />  Home</Link> 
        //         </div>
        //         <div className='flex items-center h-12'>
        //             <UserIcon width={20} height={20} />  Bio
        //         </div>
        //         <div className='flex items-center h-12'>
        //            <Link to='skills'><Cog8ToothIcon width={20} height={20} />  Skills</Link> 
        //         </div>
        //         <div className='flex items-center h-12'>
        //             <CalendarIcon width={20} height={20} /> Experiences
        //         </div>
        //         <div className='flex items-center h-12'>
        //            <Link to='achievements'><TrophyIcon width={20} height={20} />  Achievements</Link> 
        //         </div>
        //         <div className='flex items-center h-12'>
        //             <LogOutIcon width={20} height={20} />  Log Out
        //         </div>
        // first side bar

        //     </div>
        //     <div>

        //     </div>