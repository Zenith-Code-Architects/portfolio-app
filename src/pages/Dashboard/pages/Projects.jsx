import React, { useState } from 'react'
import NavBar from '../../../components/NavBar'
import PagesLayout from '../layouts/PagesLayout'
import { useNavigate } from 'react-router-dom'
import { apiGetProjects } from '../../../services/projects'

const Projects = () => {
const navigate = useNavigate();
const [projects, setProjects] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isDeleting, setIsDeleting] = useState(false);

// const fetchProjects = async () => {
//   setIsLoading(true)
//   try {
//     const res = await apiGetProjects();
//     console.log(res.data);
//     setProjects(res.data.projects)
//   } catch (error) {
//     console.log(error);
//   }finally
// }

  return (
    <div>
      <NavBar/>
      <PagesLayout buttonText="Add New" onClick={()=> navigate("/dashboard/projects/add-project")}/>
    </div>
  )
}

export default Projects