import React from 'react';
import SignUpImage from '../../assets/images/sign-up-bg.jpg'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { data } from 'autoprefixer';


const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);

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
                  <label htmlFor="firstname" className="block font-medium  text-black">First Name</label>
                    <div>
                     
                      {errors.firstname && (
                        <p className="text-red-500 text-[12px] italic">{errors.firstname.message}</p>
                      )}
                    </div>
                  </div>
                  <input

                    type="text" name="firstname" id="firstname" className="  bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your firstname"
                    {
                    ...register("firstname", {
                      required: "firstname is required"

                    })}

                  />

                </div>

                <div>
                  {errors.lastname && (
                    <p className="text-red-500 text-[12px] italic">{errors.lastname.message}</p>
                  )}
                  <label htmlFor="lastname" className=" block  font-medium text-black ">Last Name</label>
                  <input

                    type="text" name="lastname" id="lastname" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your lastname"
                    {
                    ...register("lastname", {
                      required: "lastname is required"

                    })}

                  />

                </div>




                <div>
                  {errors.username && (
                    <p className="text-red-500 text-[12px] italic">{errors.username.message}</p>
                  )}
                  <label htmlFor="username" className="block  font-medium text-black">Username</label>
                  <input

                    type="text" name="username" id="username" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your custom username"
                    // {
                    // ...register("username", {
                    //   required: "username is required"

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
                  {/* <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-teal-600 rounded bg-teal-600 focus:ring-3 focus:ring-primary-300  focus:ring-primary-600 ring-offset-teal-600" />
                  </div> */}
                  <div className="ml-3 text-sm  ">
                    <label htmlFor="terms" className="font-light text-black">By creating an account you agree to the ZCA <Link className="font-medium text-primary-600 hover:underline " to="#">Terms and Conditions</Link> </label>
                  </div>
                </div>
                <button type="submit" className="text-white w-[350px] bg-[#005C66] hover:bg-[#E1B987] hover:text-black focus:ring-4 focus:outline-6 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 shadow">Create an account</button>
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