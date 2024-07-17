import React from 'react'
import PagesLayout from '../layouts/PagesLayout'
import NavBar from '../../../components/NavBar'
import { useNavigate } from 'react-router-dom'
import Table from '../../../components/Table'

const Skills = () => {
  const navigate = useNavigate()

  return (
    <div className=''>
      <NavBar />
      <PagesLayout headerText='Skills' buttonText='Add New Skills' onClick={() => navigate("/dashboard/skills/add-skill")} />
      <div className='flex flex-col items-center h-screen'>
        <Table />
      </div>

    </div>
  )
}

export default Skills