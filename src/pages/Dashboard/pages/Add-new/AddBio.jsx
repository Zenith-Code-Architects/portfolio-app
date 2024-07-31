import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddProfile } from "../../../../services/profile";
import { toast } from "react-toastify";
import Loader from "../../../../components/Loader";

const AddBio = () => {
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
      const formData = new FormData();
      formData.append("user", data.user);
      formData.append("location", data.location);
      formData.append("profilePicture", data.profilePicture[0]);
      formData.append("sex", data.sex);
      formData.append("bio", data.bio);
      formData.append("about", data.about);
      formData.append("dateOfBirth", data.dateOfBirth);
      formData.append("contact", data.contact);
      formData.append("spokenLanguages", data.spokenLanguages);
      formData.append("github", data.github);
      formData.append("linkedIn", data.linkedIn);
      formData.append("twitter", data.twitter);

      const res = await apiAddProfile(formData);

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="">Profile picture</label>
        <input
          type="file"
          {...register("profilePicture", {
            required: "Profile picture is required",
          })}
        />
        {errors.profilePicture && <p>{errors.profilePicture.message}</p>}

        <label htmlFor="">Full Name</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
          {...register("user", { required: "Full name is required" })}
        />
        {errors.user && <p>{errors.user.message}</p>}

        <label
          htmlFor="input"
          className="block text-sm font-medium text-gray-700"
        >
          Gender:
        </label>
        <select
          className="mt-1 block w-full p-2 border  rounded-md shadow-sm  sm:text-sm"
          {...register("sex", { required: "Gender is required" })}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
        {errors.sex && <p>{errors.sex.message}</p>}

        <label htmlFor="">Date of Birth</label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
          {...register("dateOfBirth", {
            required: "Date Of Birth is required",
          })}
        />
        {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}

        <label htmlFor="">Location</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && <p>{errors.location.message}</p>}

        <label htmlFor="">About you</label>
        <textarea
          className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
          {...register("about")}
        ></textarea>

        <label htmlFor="">Bio</label>
        <textarea
          className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
          {...register("bio")}
        ></textarea>

        {/* contact section */}
        <h1>CONTACT</h1>
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
          {...register("contact", { required: "Email is required" })}
        />
        {errors.contact && <p>{errors.contact.message}</p>}

        <label htmlFor="">Spoken Languages</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
          {...register("spokenLanguages")}
        />

        <label
          htmlFor="proficiency"
          className="block text-sm font-medium text-gray-700"
        >
          Level of Proficiency:
        </label>
        <select
          className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
          {...register("proficiency")}
        >
          <option>A1 (Beginner)</option>
          <option>A2 (Pre-Intermediate)</option>
          <option>B1 (Intermediate)</option>
          <option>B2 (Upper-Intermediate)</option>
          <option>C1 (Advanced)</option>
          <option>C2 (Proficient)</option>
        </select>

        <label htmlFor="">Link to your GitHub repository</label>
        <input
          type="url"
          className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
          {...register("github", {
            required: "Your github repo link is required",
          })}
        />
        {errors.github && <p>{errors.github.message}</p>}

        {/* social media links */}
        <h1>Socials</h1>
        <label htmlFor="">LinkedIn</label>
        <input
          type="url"
          className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
          {...register("linkedIn", {
            required: "Your LinkedIn profile link is required",
          })}
        />
        {errors.linkedIn && <p>{errors.linkedIn.message}</p>}

        <label htmlFor="">Instagram</label>
        <input
          type="url"
          className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
          {...register("twitter")}
        />
        <button type="submit">{isSubmitting ? <Loader /> : "Add Bio"}</button>
      </form>
    </div>
  );
};

export default AddBio;
