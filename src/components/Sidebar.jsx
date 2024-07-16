import { Link, useLocation } from "react-router-dom"
import D from "../constants"
import "../App.css"


const Sidebar = () => {
const {pathname}= useLocation()
const paths = pathname.split("/")
const currentPath = paths[2]

    return (
        <>
        <div className="flex flex-row justify-center items-center gap-x-4 ml-3 text-primary">
            <div className=" ">
                <div className=" flex flex-col justify-center items-center relative h-screen overflow-x-hidden w-16 hover:w-52" style={{ boxShadow: '10px 0 0 #2C2385' }}>
                {D.DASHBOARDLINKS.map(
                    (item, index) => {
                        return (
                        <Link key={index} to={item.path} 
                        id="nav"
                        className={`flex items-center gap-x-2 w-full hover:shadow-lg
                        
                        ${ currentPath == item.path && "bg-primary text-white rounded-l-[20px]" }` }>
                            
                            <span className="relative block text-center pl-4 min-w-14 leading-[30px] z-[1]"> 
                            {item.Icon}
                            </span>  
                            <span className="relative pl-2 block w-full whitespace-nowrap leading-[60px]">{item.name}</span>
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