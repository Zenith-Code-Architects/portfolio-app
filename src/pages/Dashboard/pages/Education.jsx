import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PagesLayout from '../layouts/PagesLayout'
import NavBar from '../../../components/NavBar'
import { apiDeleteEducation, apiGetEducations } from '../../../services/education'
import Loader from '../../../components/Loader'

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
    try {
      const res = await apiDeleteEducation(_id)
      console.log(res.data)
      toast.success(res.data.message)

    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchEducations()
  }, [])


  return (
    <>
      <NavBar />
      <PagesLayout buttonText="Add New" onClick={() => navigate("/dashboard/education/add-education")} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-4">
          {education.length === 0 ? (
            <p>No Education Added Yet</p>
          ) : (
            <div>
              <h1 className="text-2xl font-bold mb-4">Education</h1>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item._id} className="p-4 border rounded-lg shadow-sm bg-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold">{item.institutionName}</h2>
                        <p className="text-gray-600">Location: {item.location}</p>
                        <p className="text-gray-600">Program: {item.program}</p>
                        <p className="text-gray-600">Qualification: {item.qualification}</p>
                        <p className="text-gray-600">Grade: {item.grade}</p>
                        <p className="text-gray-600">Enrollment Date: {item.enrollmentDate}</p>
                        <p className="text-gray-600">Completion Date: {item.completionDate}</p>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};






export default Education