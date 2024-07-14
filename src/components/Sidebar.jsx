import { Link, useLocation } from "react-router-dom"
import D from "../constants"
import "../App.css"


const Sidebar = () => {
const {pathname}= useLocation()
const paths = pathname.split("/")
const currentPath = paths[2]

    return (
        <>
        <div className="flex flex-row justify-center gap-x-4 h-screen  border-r ml-3 text-primary">
            <div className=" flex flex-col justify-center content-center ">
                <div className="">
                </div>
                <div className=" flex flex-col justify-center items-center gap-y-3  w-[240px]">
                {D.DASHBOARDLINKS.map(
                    (item, index) => {
                        return (
                        <Link key={index} to={item.path} 
                        className={`flex text-center gap-x-2 w-full pl-5 py-2 hover:shadow-lg 
                        
                        ${ currentPath == item.path && "bg-primary text-white rounded-l-[20px]" }` }>
                            
                            <span className=""> 
                            {item.Icon}
                            </span>  
                            <span className="">{item.name}</span>
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

        //     </div>
        //     <div>

        //     </div>