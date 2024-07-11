import { Link } from "react-router-dom"
import D from "../constants"
import { useState } from "react"


const Sidebar = () => {

    return (
        <>
        <div>
            <div className="bg-black/70 text-white h-[76px] flex items-center justify-center">
            <span className="text-5xl" >ZCA </span> portfolio
            </div> 
            <div className=" w-[200px] bg-primary text-white">
                <div className="px-3 pt-4 flex flex-col gap-y-7">
                {D.DASHBOARDLINKS.map(
                    (item, index) => {
                        return <Link key={index} to={item.path}>
                            <div id="dashboard-links" className="flex gap-x-2 content-center text-base shadow-sm rounded-lg p-4 border-t-4  border-b-4 border-blue-700 hover:bg-white hover:text-primary hover:shadow-lg transition duration-300 ease-in-out}"> 
                            {item.Icon}{item.name}
                            </div>  
                            </Link>
                    }
                )

                }
                </div> 
            </div>
        </div>
        </>
    )
}

export default Sidebar

// <>
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

        //     </div>
        //     <div>

        //     </div>