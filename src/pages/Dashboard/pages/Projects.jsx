import React from 'react'
import NavBar from '../../../components/NavBar'
import PagesLayout from '../layouts/PagesLayout'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
const navigate = useNavigate()

  return (
    <div>
      <NavBar/>
      <PagesLayout buttonText="Add New" onClick={()=> navigate("/dashboard/projects/add-project")}/>
    </div>
  )
}

export default Projects