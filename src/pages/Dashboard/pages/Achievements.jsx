import React from 'react'
import PagesLayout from '../layouts/PagesLayout'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../../components/NavBar'
import Tile from '../../../components/Tile'

const Achievements = () => {
    const navigate = useNavigate()

    
    return (
        <div>
            <NavBar />
            <PagesLayout headerText='Achievements'
                buttonText='Add New' onClick={() => navigate("/dashboard/achievements/add-achievement")}
                children='' >
                    <Tile/>
            </PagesLayout>


        </div>
    )
}

export default Achievements