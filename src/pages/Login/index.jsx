import React, { useState } from 'react'
import PhoneImage from "./../../assets/images/phone-image.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { apiLogin } from '../../services/auth';
import { EyeIcon, UserIcon } from '@heroicons/react/20/solid';
import "./login.css"



const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(isSubmitting);
  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);


    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      })
      console.log("Response:", res)
      console.log("second: I got called");

      //redirect to dashboard
      navigate("/dashboard")

    } catch (error) {
      console.log(error);
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-green-700 rounded-xl  text-white h-[450px] w-[420px] relative ">

      <div className="w-full p-10">
        <p className="font-bold text-4xl mb-2 text-center">Welcome Back !</p>
        <h6 className='text-center'>Log in to your portfolio</h6>

        <form className='flex flex-col mt-4' onSubmit={handleSubmit(onSubmit)}>

          <div className=' relative w-full h-12 input-box'>
            <input type='text'
              id="email"
              placeholder='Username or Email'
              name="email"
              className=" w-full h-full text-base text-[#fff] bg-transparent border-[rgba(255,255,255,0.1)] outline-none border-2 rounded-[40px] border-solid "
              {
              ...register("email", { required: "Email or username is required" })

              }

            />
            <span><UserIcon width={20} height={20} /></span>
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>



          <div className=' relative w-full h-12 input-box'>
            <input type="password"
              id="password"
              name="password"
              placeholder='Password'
              className=" w-full h-full bg-transparent border-[rgba(255,255,255,0.1)] outline-none border-2 rounded-[40px] border-solid"
              {
              ...register("password", { required: "Password is required" })

              }
            />
            <span className='text-[#fff] absolute right-5 top-2/4 '><EyeIcon width={20} height={20} /></span>
            {errors.password && (
              <p className='text-red-500'>{errors.password.message}</p>
            )}
          </div>




          <div className="">

            <input type="checkbox"
              id="remember-me"
              name="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-sm font-medium text-gray-700">Remember me</label>
            <Link to="#" className="text-sm text-gray-600 hover:underline ">Forgot password?</Link>
            <button type="submit" className=" py-3 px-8 bg-blue-600 text-white w-52 rounded-md ">
              {isSubmitting ? "Loading..." : "Login"}
            </button>
            <p>Don't have an account? <a href="#" className="text-blue-600 hover:underline">Register</a></p>
          </div>



          <div className="mt-4 text-sm text-gray-600">

          </div>


        </form>
      </div>
    </div>









  )
}

export default Login
