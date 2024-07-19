import React, { useState } from 'react'
import NavBar from '../../../../components/NavBar'
import { useForm } from "react-hook-form";
import { apiAddSkill } from '../../../../services/skills';
import { toast } from 'react-toastify';
import Loader from '../../../../components/Loader';

const AddSkill = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true)
        try {
            const res = await apiAddSkill({
                name: data.name,
                levelOfProficiency: data.proficiency
            })

            console.log(res.data);
            toast.success(res.data.message)
        } catch (error) {
            console.log(error);
            toast.error("An error occured")
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <NavBar />
            <div >

                <form onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col'>

                    <label htmlFor="">
                        Skill
                    </label>
                    <input type="text"
                        {...register("name", { required: "Name of skill is required" })} />

                    <label htmlFor="">
                        Level of Proficiency
                    </label>
                    <select name="" id=""
                        {...register("proficiency", { required: "Level of proficiency is required" })}>
                        <option>beginner</option>
                        <option>intermediate</option>
                        <option>advanced</option>
                        <option>expert</option>
                    </select>
                    <button
                        type="submit">
                        {isSubmitting ? <Loader /> : "Add Skill"}
                    </button>
                </form>

            </div>
        </>

    )
}

export default AddSkill