import { CalendarIcon, GlobeAmericasIcon, HomeIcon, PhoneIcon, UserIcon } from "@heroicons/react/20/solid";
import { LogOutIcon, Medal } from "lucide-react";

const D = {
DASHBOARDLINKS: [
    {
        name: "Overview",
        path: "",
        Icon: <HomeIcon width={20} height={20}/>
    },
    {
        name: "Bio",
        path: "bio",
        Icon: <UserIcon width={20} height={20}/>
    },
    {
        name: "Skills",
        path: "skills",
        Icon: <HomeIcon width={20} height={20}/>
    },
    {
        name: "Experience",
        path: "experience",
        Icon: <CalendarIcon width={20} height={20}/>
    },
    {
        name: "Projects",
        path: "projects",
        Icon: <Medal width={20} height={20}/>
    },
    {
        name: "Contact",
        path: "contact",
        Icon: <PhoneIcon width={20} height={20}/>
    },
    {
        name: "Socials",
        path: "socials",
        Icon: <GlobeAmericasIcon width={20} height={20}/>
    },
    {
        name: "Log Out",
        path: "/",
        Icon: <LogOutIcon width={20} height={20}/>
    },
    
],
};

export default D