import React, { useEffect, useState } from "react";
import PagesLayout from "../layouts/PagesLayout";
import { useNavigate } from "react-router-dom";
import { apiDeleteProject, apiGetProjects } from "../../../services/projects";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProjects();
      console.log(res.data);
      setProjects(res.data.projects);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteProject(_id);
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
    fetchProjects();
  }, []);

  return (
    <div>
      <PagesLayout
        buttonText="Add New"
        onClick={() => navigate("/dashboard/projects/add-project")}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {projects.length == 0 ? (
            <p>No projects added yet</p>
          ) : (
            <>
              {projects.map((projects, index) => {
                return (
                  <div>
                    <h1> Project</h1>
                    <p>{projects.projectName}</p>
                    <p>{projects.program}</p>
                    <p>{projects.contributors}</p>
                    <p>{projects.skills}</p>
                    <p>{projects.link}</p>
                    <p>{projects.nameOfInstitution}</p>
                    <p>{projects.startDate}</p>
                    <p>{projects.endDate}</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
