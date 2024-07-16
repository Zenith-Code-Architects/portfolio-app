import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../../components/NavBar'
import PagesLayout from '../layouts/PagesLayout'

const Licenses = () => {
    const navigate = useNavigate()

    return (
        <div>
            <NavBar/>
            <PagesLayout buttonText="Add New" onClick={() => navigate("/dashboard/licenses/add-license")} />
        </div>
    )
}

export default Licenses