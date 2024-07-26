import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddExperience } from "../../../../services/experiences";
import { toast } from "react-toastify";
import Loader from "../../../../components/Loader";

const AddExperience = () => {
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
      const res = await apiAddExperience({
        user: data.user,
        companyName: data.companyName,
        role: data.role,
        skills: data.skills,
        description: data.description,
        employmentType: data.employmentType,
        location: data.location,
        locationType: data.locationType,
        startDate: data.startDate,
        endDate: data.endDate,
      });
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="">Name of Company</label>
          <input
            type="text"
            {...register("companyName", {
              required: "Name of company is required",
            })}
          />

          <label htmlFor="">Role</label>
          <input
            type="text"
            {...register("role", { required: "Name of company is required" })}
          />

          <label htmlFor="">Skills</label>
          <input
            type="text"
            {...register("skills", { required: "Name of company is required" })}
          />

          <label htmlFor="">Job Description</label>
          <textarea
            {...register("description", {
              required: "Name of company is required",
            })}
          ></textarea>

          <label htmlFor="">Location</label>
          <input
            type="text"
            {...register("location", {
              required: "Name of company is required",
            })}
          />

          <label htmlFor="">Location Type</label>
          <select
            name=""
            id=""
            {...register("locationType", {
              required: "Name of company is required",
            })}
          >
            <option>on-site</option>
            <option>hybrid</option>
            <option>remote</option>
          </select>

          <label htmlFor="">Start Date</label>
          <input
            type="startDate"
            {...register("startDate", {
              required: "Name of company is required",
            })}
          />

          <label htmlFor="">End Date</label>
          <input
            type="date"
            {...register("endDate", {
              required: "Name of company is required",
            })}
          />

          <label htmlFor="">Employment type</label>
          <select name="" id="" {...register("employmentType")}>
            <option>self-employed</option>
            <option>full-time</option>
            <option>part-time</option>
            <option>freelance</option>
            <option>contract</option>
            <option>internship</option>
          </select>

          <button type="submit">
            {isSubmitting ? <Loader /> : "Add Experience"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddExperience;
