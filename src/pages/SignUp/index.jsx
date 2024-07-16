import React, { useState } from 'react';
import SignUpImage from '../../assets/images/sign-up-bg.jpg'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { data } from 'autoprefixer';
import { apiSignUp } from '../../services/auth'


const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
try {
  const res = await  apiSignUp ({
    firstName: data.firstName,
    lastName: data.otherNames,
    userName: data.userName,
    otherNames: data.otherNames,
    password: data.password,
    email: data.email,
    confirmedPassword: data.password

  })
  console.log(res.data);
} catch (error) {
  console.log(error);
  
}

  };

  return (



    <div className="flex">
      <section className="  w-1/2 max-h-screen">
        <div className=" items-center justify-center pl-[50px] pr-[50px]   lg:py-1">

          <div className=" rounded-lg shadow">
            <div className="p-4 pb-2 ">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight  md:text-2xl text-black">
                Create an account
              </h1>
              <form className=" md:space-y-2 " action="#" onSubmit={handleSubmit(onSubmit)}>

                <div className=''>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                  <label htmlFor="firstName" className="block font-medium  text-black">First Name</label>
                    <div>
                     
                      {errors.firstName && (
                        <p className="text-red-500 text-[12px] italic">{errors.firstName.message}</p>
                      )}
                    </div>
                  </div>
                  <input

                    type="text" name="firstName" id="firstName" className="  bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your firstName"
                    {
                    ...register("firstName", {
                      required: "firstname is required"

                    })}

                  />

                </div>

                <div>
                  {errors.lastName && (
                    <p className="text-red-500 text-[12px] italic">{errors.lastName.message}</p>
                  )}
                  <label htmlFor="lastName" className=" block  font-medium text-black ">Last Name</label>
                  <input

                    type="text" name="lastName" id="lastName" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your lastName"
                    {
                    ...register("lastName", {
                      required: "lastName is required"

                    })}

                  />

                </div>
                <div>
                  {errors.otherNames && (
                    <p className="text-red-500 text-[12px] italic">{errors.otherNames.message}</p>
                  )}
                  <label htmlFor="otherNames" className=" block  font-medium text-black ">Other Names</label>
                  <input

                    type="text" name="otherNames" id="otherNames" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your other names"
                    {
                    ...register("otherNames")}
                  />

                </div>





                <div>
                  {errors.userName && (
                    <p className="text-red-500 text-[12px] italic">{errors.userName.message}</p>
                  )}
                  <label htmlFor="userName" className="block  font-medium text-black">username</label>
                  <input

                    type="text" name="userName" id="userName" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your custom userName"
                    // {
                    // ...register("userName", {
                    //   required: "userName is required"

                    // })}

                  />
                </div>

                <div>
                  {errors.email && (
                    <p className="text-red-500 text-[12px] italic">{errors.email.message}</p>
                  )}
                  <label htmlFor="email" className="block  font-medium  text-black">Email</label>
                  <input type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="name@company.com"
                    {
                    ...register("email", { required: "email is required" })
                    }
                  />

                </div>
                <div>
                  {errors.password && (
                    <p className="text-red-500 text-[12px]  italic">{errors.password.message}</p>
                  )}
                  <label htmlFor="password" className="block  font-medium  text-black">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow "
                    {
                    ...register("password", { required: "password is required", minLength: 8 })
                    }
                  />

                </div>
                {/* <div>
                  {errors.passrord && (
                    <p className="text-red-500 text-[12px] italic">{errors.passrord.message}</p>
                  )}
                  <label htmlFor="confirm-password" className="block  font-medium  text-black">Confirm Password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow "
                    {
                    ...register("password", { required: "passwords must match", minLength: 8 })
                    }
                  />

                </div> */}

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-teal-600 rounded bg-teal-600 focus:ring-3 focus:ring-primary-300  focus:ring-primary-600 ring-offset-teal-600" />
                  </div>
                  <div className="ml-3 text-sm  ">
                    <label htmlFor="terms" className="font-light text-black">I accept the <Link className="font-medium text-primary-600 hover:underline " to="#">Terms and Conditions</Link> </label>
                  </div>
                </div>
                <button type="submit" className="text-black w-[350px] bg-[#005C66] hover:bg-[#E1B987] focus:ring-4 focus:outline-6 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 shadow">Create an account</button>
                <p className="text-sm font-light text-black">
                  Already have an account? <Link to="#" className="font-medium text-primary-600 hover:underline ">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>



      <div className="w-1/2 box-border">
        <img src={SignUpImage} alt="hero background" className="  w-[100vw]   h-svh" />
      </div>

    </div>



  )
}

export default SignUp