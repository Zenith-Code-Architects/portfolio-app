import React, { useState } from 'react'
import NavBar from '../../../../components/NavBar'
import { useForm } from 'react-hook-form'
import { apiAddAchievement } from '../../../../services/achievements';
import Loader from '../../../../components/Loader';
import { toast } from 'react-toastify';

const AddAchievement = () => {
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
            const res = await apiAddAchievement({
                awards: data.awards,
                description: data.description,
                image: data.image,
                date: data.date,
                nameOfInstitution: data.nameOfInstitution,

            });

            console.log(res.data)
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
            toast.error("An error occured");
        } finally{
            setIsSubmitting(false)
        }
    };


    return (
        <>
            <div>


                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>


                    <label htmlFor="awards">
                        Award name or Achievement
                    </label>
                    <input type="text"
                        {...register("awards", { required: "Name of achievement or award is required" })}
                    />
                    {errors.awards && <span>{errors.awards.message}</span>}



                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea
                        {...register("description", { required: "Description is required" })}>
                    </textarea>
                    
                    {errors.description && <span>{errors.description.message}</span>}



                     <label htmlFor="text">
                        Image of Award or Achievement
                    </label>
                    <input type="text"
                        {...register("image", { required: "Image of award or achievement is required" })}
                    />
                    {errors.image && <span>{errors.image.message}</span>}




                    <label htmlFor="date">
                        Date Obtained
                    </label>
                    <input type="date"
                        {...register("date", { required: "Date is required" })}
                    />
                    {errors.date && <span>{errors.date.message}</span>}




                    <label htmlFor="nameOfInstitution">
                        Name of Institution
                    </label>
                    <input type="text"
                        {...register("nameOfInstitution", { required: "Name of Institution is required" })}
                    />
                    {errors.nameOfInstitution && <span>{errors.nameOfInstitution.message}</span>}



                    <button
                        type='submit'>
                        {isSubmitting ? <Loader width={20} height={20}/> : "Add Achievement"}
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddAchievement