import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar'
import { useNavigate } from 'react-router-dom'
import Table from '../../../components/Table'
import PagesLayout from '../layouts/PagesLayout'
import { apiGetSkills } from '../../../services/skills'
import PageLoader from '../components/PageLoader'

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSkills = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.skills)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchSkills()
  }, [])

  return (
    <>
      <NavBar /><PagesLayout headerText='Skills' buttonText='Add New Skills' onClick={() => navigate("/dashboard/skills/add-skill")} /><div className='flex flex-col items-center h-screen'>

        {
          isLoading ?
            <PageLoader/> :
            <div>
              {
                skills.length == 0 ? <p>No skill added yet</p> :
                  <>
                    <Table />

                  </>
              }
            </div>
        }

      </div>
    </>
  )
}

export default Skills