import React, { useState } from 'react';
import NavBar from '../../../../components/NavBar';
import { apiAddEducation } from '../../../../services/education';
import { toast } from 'react-toastify';
import Loader from '../../../../components/Loader';
import { useForm } from "react-hook-form";

const AddEducation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiAddEducation({
        schoolName: data.schoolName,
        location: data.location,
        program: data.program,
        degree: data.degree,
        grade: data.grade,
        startDate: data.startDate,
        endDate: data.endDate
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
    <>
      <NavBar />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="schoolName">Name Of Institution</label>
          <input 
            type="text" 
            {...register("schoolName", { required: "Name of institution is required" })} 
          />
          {errors.schoolName && <span>{errors.schoolName.message}</span>}

          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            {...register("location", { required: "Location is required" })} 
          />
          {errors.location && <span>{errors.location.message}</span>}

          <label htmlFor="program">Program</label>
          <input 
            type="text" 
            {...register("program", { required: "Program Name is required" })} 
          />
          {errors.program && <span>{errors.program.message}</span>}

          <label htmlFor="degree">Qualification Obtained</label>
          <select 
            {...register("degree", { required: "Qualification is required" })}>
            <option>Choose a level</option>
            <option>Certificate</option>
            <option>Diploma</option>
            <option>Highest National Diploma (HND)</option>
            <option>Bachelor's Degree</option>
            <option>Masters</option>
          </select>
          {errors.degree && <span>{errors.degree.message}</span>}

          <label htmlFor="grade">Grade</label>
          <input 
            type="text" 
            {...register("grade")} 
          />

          <label htmlFor="startDate">Date of Enrollment</label>
          <input 
            type="text" 
            {...register("startDate", { required: "Date of Enrollment is required" })} 
          />
          {errors.startDate && <span>{errors.startDate.message}</span>}

          <label htmlFor="endDate">Date of Completion</label>
          <input 
            type="text" 
            {...register("endDate", { required: "Date of Completion is required" })} 
          />
          {errors.endDate && <span>{errors.endDate.message}</span>}

          <button type="submit">
            {isSubmitting ? <Loader /> : "Add Education"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEducation;
