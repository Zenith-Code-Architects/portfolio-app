import { Link, useLocation } from "react-router-dom"
import D from "../constants"


const Sidebar = () => {
const {pathname}= useLocation()
const paths = pathname.split("/")
const currentPath = paths[2]

    return (
        <>
        <div className="flex flex-row gap-x-4">
            <div className="  ">
                <div className="py-3 flex flex-col gap-y-7 justify-center w-[200px] h-screen">
                {D.DASHBOARDLINKS.map(
                    (item, index) => {
                        return (
                        <Link key={index} to={item.path} 
                        className={`flex gap-x-2 w-40 px-5 py-3 rounded-2xl shadow border hover:border-[1.5px] hover:bg-primary hover:text-white hover:shadow-lg ${ currentPath == item.path && "bg-primary text-white" }` }>
                            <span > 
                            {item.Icon}
                            </span>  
                            <span>{item.name}</span>
                            </Link>)
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