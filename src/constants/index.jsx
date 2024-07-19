import { CalendarIcon, CreditCardIcon, GlobeAmericasIcon, HomeIcon, PhoneIcon, UserIcon } from "@heroicons/react/20/solid";
import { GraduationCapIcon, LogOutIcon, Medal } from "lucide-react";

const D = {
    DASHBOARDLINKS: [
        {
            name: "Overview",
            path: "",
            Icon: <UserIcon width={20} height={20} />
        },
        {
            name: "Bio",
            path: "bio",
            Icon: <UserIcon width={20} height={20} />
        },
        {
            name: "Education",
            path: "education",
            Icon: <GraduationCapIcon width={20} height={20} />
        },
        {
            name: "Licenses",
            path: "licenses",
            Icon: <CreditCardIcon width={20} height={20} />
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
    SKILLS: [
        {
            name: "React JS",
            levelOfProficiency: "Expert"
        },
        {
            name: "C#",
            levelOfProficiency: "Beginner"
        },
        {
            name: "HTML",
            levelOfProficiency: "Advanced"
        },
        {
            name: "CSS",
            levelOfProficiency: "Basic"
        },
        {
            name: "JavaScript",
            levelOfProficiency: "Expert"
        },
        {
            name: "Node JS",
            levelOfProficiency: "None"
        },
    ],
    EDUCATIONS: [
        {
            name: "Name Of Institution",
            textEntered: "Expert"
        },
        {
            name: " Location",
            textEntered: "Beginner"
        },
        {
            name: "Program",
            textEntered: "Advanced"
        },
        {
            name: " Qualification Obtained",
            textEntered: "Basic"
        },
        {
            name: "Grade",
            textEntered: "Expert"
        },
        {
            name: "Date of Enrollment",
            textEntered: "None"
        },
        {
            name: "Date of Completion",
            textEntered: "None"
        },
    ],
    ACHIEVEMENTS: [
        {
            name: "Award Name or Achievement",
            textEntered:"Best Developer"
        },
        {
            name: "Name of Organization",
            textEntered:"Best Developer"
        },
        {
            name: "Image of Award or Achievement",
            textEntered:"Best Developer"
        },
        {
            name: "Description",
            textEntered:"Best Developer"
        },
        
        {
            name: "Date Obtained",
            textEntered:"Best Developer"
        },
        
        
    ]
};

export default D