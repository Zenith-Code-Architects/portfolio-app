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
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
        <h1 className="text-2xl text-center font-semibold mb-6">Add Bio</h1>

        <div className="flex flex-row items-center gap-x-6 mb-5">
          <label htmlFor="profilePicture" className="block text-sm font-medium">
            Profile Picture
          </label>
          <input
            type="file"
            className="border p-2 rounded-md shadow-sm"
            {...register("profilePicture", {
              required: "Profile picture is required",
            })}
          />
          {errors.profilePicture && (
            <p className="text-red-500">{errors.profilePicture.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="user"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("user", { required: "Full name is required" })}
          />
          {errors.user && <p className="text-red-500">{errors.user.message}</p>}
        </div>

        <div className="flex flex-row justify-between gap-x-6 mb-5">
          <div className="w-1/2">
            <label
              htmlFor="sex"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
              {...register("sex", { required: "Gender is required" })}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.sex && <p className="text-red-500">{errors.sex.message}</p>}
          </div>

          <div className="w-1/2">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
              {...register("dateOfBirth", {
                required: "Date Of Birth is required",
              })}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            About You
          </label>
          <textarea
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("about")}
          ></textarea>
        </div>

        <div className="mb-5">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("bio")}
          ></textarea>
        </div>

        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <div className="mb-5">
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("contact", { required: "Email is required" })}
          />
          {errors.contact && (
            <p className="text-red-500">{errors.contact.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="spokenLanguages"
            className="block text-sm font-medium text-gray-700"
          >
            Spoken Languages
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("spokenLanguages")}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="github"
            className="block text-sm font-medium text-gray-700"
          >
            Link to your GitHub repository
          </label>
          <input
            type="url"
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("github", {
              required: "Your GitHub repo link is required",
            })}
          />
          {errors.github && (
            <p className="text-red-500">{errors.github.message}</p>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4">Socials</h2>
        <div className="mb-5">
          <label
            htmlFor="linkedIn"
            className="block text-sm font-medium text-gray-700"
          >
            LinkedIn
          </label>
          <input
            type="url"
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("linkedIn", {
              required: "Your LinkedIn profile link is required",
            })}
          />
          {errors.linkedIn && (
            <p className="text-red-500">{errors.linkedIn.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="twitter"
            className="block text-sm font-medium text-gray-700"
          >
            Instagram
          </label>
          <input
            type="url"
            className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
            {...register("twitter")}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-md drop-shadow mt-8 flex items-center justify-center"
        >
          {isSubmitting ? <Loader color="white" width="80" /> : "Add Bio"}
        </button>
      </form>
    </div>
  );
};

export default AddBio;
