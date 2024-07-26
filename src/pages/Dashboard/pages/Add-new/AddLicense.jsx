import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { apiAddLicense } from "../../../../services/licenses";
import Loader from "../../../../components/Loader";

const AddLicense = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState();

  const onSubmit = async (data) => {
    console.log(data);

    setIsSubmitting(true);
    try {
      const res = await apiAddLicense({
        name: data.name,
        issuingOrganization: data.issuingOrganization,
        issueDate: data.issueDate,
        expirationDate: data.expirationDate,
        credentialId: data.credentialId,
        credentialUrl: data.credentialUrl,
        skills: data.skills,
        media: data.media[0],
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {/* <label htmlFor="">Name</label>
      <input type="text" {...register("user", {

      })} /> */}

      <div className="flex flex-col gap-y-2">
        <label htmlFor="">Name of License Obtained</label>
        <input
          type="text"
          {...register("name", {
            required: "Name of license obtained is required",
          })}
          className="border"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="">Issuing Organization</label>
        <input
          type="text"
          {...register("issuingOrganization", {
            required: "Name of skill is required",
          })}
        />
      </div>

      <label htmlFor="">Date of Issue</label>
      <input
        type="text"
        {...register("issueDate", {
          required: "Name of skill is required",
        })}
      />

      <label htmlFor="">Date of Expiration</label>
      <input
        type="text"
        {...register("expirationDate", {
          required: "Name of skill is required",
        })}
      />

      <label htmlFor="">License or Credential Number</label>
      <input
        type="text"
        {...register("credentialId", {
          required: "Name of skill is required",
        })}
      />

      <label htmlFor="">Credential URL if any</label>
      <input type="text" {...register("credentialUrl")} />

      <label htmlFor="">Skills</label>
      <input
        type="text"
        {...register("skills", { required: "Name of skill is required" })}
      />

      <label htmlFor="">Media</label>
      <input
        type="file"
        {...register("media", { required: "Name of skill is required" })}
      />
      <button type="submit">{isSubmitting ? <Loader /> : "Add License"}</button>
    </form>
  );
};

export default AddLicense;
