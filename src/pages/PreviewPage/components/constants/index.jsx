import { EnvelopeIcon } from "@heroicons/react/20/solid"
import { HomeIcon } from "@heroicons/react/20/solid"
import { ContactIcon, InfoIcon, MailIcon, MessageCircleCodeIcon, MessageCirclePlusIcon, ServerIcon, UserIcon } from "lucide-react"

const N = {
    NAVLINKS:[
        {
            name:"Home",
            path:"",
            Icon: <HomeIcon className="w-5 h-5"/>
        },
        {
            name:"About",
            path:"",
            Icon: <UserIcon className="w-5 h-5"/>
        },
        {
            name:"Skills",
            path:"", 
            Icon: <ServerIcon className="w-5 h-5"/>
        },
        {
            name:"Resume",
            path:"", 
            Icon: <ContactIcon className="w-5 h-5"/>
        },
        {
            name:"Portfolio",
            path:"", 
            Icon: <EnvelopeIcon className="w-5 h-5"/>
        },
        {
            name:"Contact",
            path:"",
            Icon: <MailIcon className="w-5 h-5"/>
        },

    ]

}

export default N