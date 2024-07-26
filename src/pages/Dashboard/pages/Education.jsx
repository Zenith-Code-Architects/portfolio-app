import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PagesLayout from '../layouts/PagesLayout'
import NavBar from '../../../components/NavBar'
import { apiDeleteEducation, apiGetEducations } from '../../../services/education'
import Loader from '../../../components/Loader'
import { TrashIcon } from '@heroicons/react/20/solid'
import { toast } from 'react-toastify'

const Education = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState([false]);

  const fetchEducations = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetEducations();
      console.log(res.data);
      setEducation(res.data.education)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting((prev) => ({...prev, [_id] : true}))
    try {
      const res = await apiDeleteEducation(_id)
      console.log(res.data)
      toast.success(res.data.message)

    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    } finally{
      setIsDeleting((prev) => ({ ...prev, [_id] : false}))
    }
  }

  useEffect(() => {
    fetchEducations()
  }, [])


  return (
    <>
      <PagesLayout buttonText="Add New" onClick={() => navigate("/dashboard/education/add-education")} />
      {isLoading ? 
        <Loader /> : 
        <div className="p-4">
          {education.length === 0 ?  <p>No Education Added Yet</p> : 
            <div>
              <h1 className="text-2xl font-bold mb-4">Education</h1>
              <div className="space-y-4">
                {education.map((education, index) => (
                  <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold">{education.institutionName}</h2>
                        <p className="text-gray-600">Location: {education.location}</p>
                        <p className="text-gray-600">Program: {education.program}</p>
                        <p className="text-gray-600">Qualification: {education.qualification}</p>
                        <p className="text-gray-600">Grade: {education.grade}</p>
                        <p className="text-gray-600">Enrollment Date: {education.enrollmentDate}</p>
                        <p className="text-gray-600">Completion Date: {education.completionDate}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(education.id)}
                      >
                        {
                          isDeleting[education.id] ? <Loader width={10} /> : <TrashIcon width={15} height={15} className='text-red-500 cursor-pointer' />
                        }
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      }
    </>
  );
};






export default Education