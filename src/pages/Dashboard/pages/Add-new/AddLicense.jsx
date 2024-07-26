import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { apiAddLicense } from '../../../../services/licenses';
import Loader from '../../../../components/Loader';

const AddLicense = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
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
                media: data.media,
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
            <div>

                <form onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col'>

                    <label htmlFor="name">
                        Name of License Obtained
                    </label>
                    <input type="text"
                        {...register("name", { required: "Name of license obtained is required" })} />



                    <label htmlFor="issuingOrganization">
                        Issuing Organization
                    </label>
                    <input type="text"

                        {...register("issuingOrganization", { required: "Name of skill is required" })} />



                    <label htmlFor="issueDate">
                        Date of Issue
                    </label>
                    <input type="text"
                        {...register("issueDate", { required: "Name of skill is required" })} />



                    <label htmlFor="expirationDate">
                        Date of Expiration
                    </label>
                    <input type="text"
                        {...register("expirationDate", { required: "Name of skill is required" })} />



                    <label htmlFor="credentialId">
                        License or Credential Number
                    </label>
                    <input type="text"
                        {...register("credentialId", { required: "Name of skill is required" })} />



                    <label htmlFor="credentialUrl">
                        Credential URL if any
                    </label>
                    <input type="text"
                        {...register("credentialUrl")} />




                    <label htmlFor="skills">
                        Skills
                    </label>
                    <input type="text"
                        {...register("skills", { required: "Name of skill is required" })} />



                    <label htmlFor="media">
                        Media
                    </label>
                    <input type="text"
                        {...register("media", { required: "Name of skill is required" })} />
                    <button
                        type='submit'>

                        {isSubmitting ? <Loader /> : "Add License"}

                    </button>
                </form>


            </div>
        </>

    )
}

export default AddLicense