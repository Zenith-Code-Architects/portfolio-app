import React from 'react'
import { useNavigate } from 'react-router-dom'
import PagesLayout from '../../layouts/PagesLayout'

const Experiences = () => {
  const navigate = useNavigate()
  return (
   
    <div>
      <PagesLayout buttonText="Add New" onClick={()=> navigate("/dashboard/experiences/add-experience")}/>
    </div>
  )
}

export default Experiences