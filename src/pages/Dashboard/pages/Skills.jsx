import React from 'react'
import PagesLayout from '../layouts/PagesLayout'
import NavBar from '../../../components/NavBar'

const Skills = () => {
  return (
    <div>
      <NavBar/>
        <PagesLayout headerText='Skills' buttonText='Add New Skills'/>
        <span>All skills here</span>
    </div>
  )
}

export default Skills