import React from 'react'
import { useNavigate } from 'react-router-dom'
import PagesLayout from '../layouts/PagesLayout'
import NavBar from '../../../components/NavBar'

const Education = () => {
    const navigate = useNavigate()

  return (
    <div>
        <NavBar/>
         <PagesLayout buttonText="Add New" onClick={()=> navigate("/dashboard/education/add-education")}/>
    </div>
  )
}

export default Education