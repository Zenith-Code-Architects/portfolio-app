import React from 'react'
import PagesLayout from '../layouts/PagesLayout'
import NavBar from '../../../components/NavBar'
import Sidebar from '../../../components/Sidebar'
import { useNavigate } from 'react-router-dom'

const Bio = () => {
const navigate = useNavigate()

  return (
    <div>
      <NavBar/>
      <PagesLayout buttonText="Add New" onClick ={()=> navigate ("/dashboard/bio/add-bio")} />
        <div className='w-64 h-64 bg-red-400 rounded-full'>

        </div>
    </div>
  )
}

export default Bio