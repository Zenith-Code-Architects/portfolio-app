import React from 'react'
import { useNavigate } from 'react-router-dom'
import PagesLayout from '../layouts/PagesLayout'
import NavBar from '../../../components/NavBar'
import Table from '../../../components/Table'

const Education = () => {
    const navigate = useNavigate()

  return (
    <div>
        <NavBar/>
         <PagesLayout buttonText="Add New" onClick={()=> navigate("/dashboard/education/add-education")}/>
          <Table/>
    </div>
  )
}

export default Education