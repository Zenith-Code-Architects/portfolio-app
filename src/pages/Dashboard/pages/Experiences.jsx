import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";
import Loader from "../../../components/Loader";
import {
  apiDeleteExperience,
  apiGetExperiences,
} from "../../../services/experiences";
import { toast } from "react-toastify";

const Experiences = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchExperiences = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetExperiences();
      console.log(res.data);
      setExperiences(res.data.experience);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteExperience(_id);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setIsDeleting((prev) => ({ ...prev, [_id]: false }));
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div>
      <PagesLayout
        buttonText="Add New"
        onClick={() => navigate("/dashboard/experiences/add-experience")}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {experiences?.length == 0 ? (
            <p>No experiences yet added</p>
          ) : (
            <>
              <div>
                {experiences?.map((experience, index) => {
                  return (
                    <div key={index}>
                      <p>{experience.companyName}</p>
                      <p>{experience.role}</p>
                      <p>{experience.skills}</p>
                      <p>{experience.description}</p>
                      <p>{experience.employmentType}</p>
                      <p>{experience.location}</p>
                      <p>{experience.locationType}</p>
                      <p>{experience.startDate}</p>
                      <p>{experience.endDate}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Experiences;
