import { Link } from "react-router-dom"
import D from "../constants"


const Sidebar = () => {
    return (
        <>
        <div>
            <span>ZCA portfolio</span>
            <div className="h-screen w-[200px] bg-primary text-white">
                {D.DASHBOARDLINKS.map(
                    (item, index) => {
                        return <Link key={index} to={item.path}>{item.Icon}{item.name}</Link>
                    }
                )

                }
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