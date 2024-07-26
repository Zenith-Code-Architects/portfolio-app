import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddProject } from "../../../../services/projects";
import { toast } from "react-toastify";
import Loader from "../../../../components/Loader";

const AddProjects = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiAddProject({
        projectName: data.projectName,
        program: data.program,
        contributors: data.contributors,
        skills: data.skills,
        link: data.link,
        nameOfInstitution: data.nameOfInstitution,
        startDate: data.startDate,
        endDate: data.endDate,
      });

      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action="" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Project Name</label>
        <input type="text" {...register("projectName")} />
      </div>

      <div>
        <label htmlFor="">Program</label>
        <input type="text" {...register("program")} />
      </div>

      <div>
        <label htmlFor="">Contributors</label>
        <input type="text" {...register("contributors")} />
      </div>

      <div>
        <label htmlFor="">Skills</label>
        <input type="text" {...register("skills")} />
      </div>

      <div>
        <label htmlFor="">Link</label>
        <input type="text" {...register("link")} />
      </div>

      <div>
        <label htmlFor="">Name of Institution</label>
        <input type="text" {...register("nameOfInstitution")} />
      </div>

      <div>
        <label htmlFor="">Start Date</label>
        <input type="date" {...register("startDate")} />
      </div>

      <div>
        <label htmlFor="">End Date</label>
        <input type="date" {...register("endDate")} />
      </div>

      <button type="submit">{isSubmitting ? <Loader /> : "Add Project"}</button>
    </form>
  );
};

export default AddProjects;
