import React from 'react'
import { useNavigate } from 'react-router-dom'
import PagesLayout from '../layouts/PagesLayout'
import NavBar from '../../../components/NavBar'
import Tile from '../../../components/Tile'

const Experiences = () => {
  const navigate = useNavigate()
  return (
   
    <div>
      <NavBar/>
      <PagesLayout buttonText="Add New" onClick={()=> navigate("/dashboard/experiences/add-experience")}/>
    </div>
  )
}

export default Experiences