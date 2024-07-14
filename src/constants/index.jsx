import { CalendarIcon, GlobeAmericasIcon, HomeIcon, PhoneIcon, UserIcon } from "@heroicons/react/20/solid";
import { LogOutIcon, Medal } from "lucide-react";

const D = {
    DASHBOARDLINKS: [
        {
            name: "Overview",
            path: "",
        },
        {
            name: "Bio",
            path: "bio",
            Icon: <UserIcon width={20} height={20} />
        },
        {
            name: "Education",
            path: "education",
            Icon: <UserIcon width={20} height={20} />
        },
        {
            name: "Skills",
            path: "skills",
            Icon: <HomeIcon width={20} height={20} />
        },
        {
            name: "Experiences",
            path: "experiences",
            Icon: <CalendarIcon width={20} height={20} />
        },
        {
            name: "Projects",
            path: "projects",
            Icon: <Medal width={20} height={20} />
        },
        {
            name: "Achievements",
            path: "achievements",
            Icon: <Medal width={20} height={20} />
        },

        {
            name: "Log Out",
            path: "/",
            Icon: <LogOutIcon width={20} height={20} />
        },

    ],
};

export default D