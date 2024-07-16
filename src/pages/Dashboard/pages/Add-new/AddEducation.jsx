import React from 'react'

const AddEducation = () => {
  return (
    <div>

      <form action=""
        className='flex flex-col'>

        <label htmlFor="">
          Name Of Institution
        </label>
        <input type="text" />



        <label htmlFor="">
          Location
        </label>
        <input type="text" />



        <label htmlFor="">
          Program
        </label>
        <input type="text" />



        <label htmlFor="">
          Qualification Obtained
        </label>
        <select name="" id="">
          <option value="" disable selected>Choose a level</option>
          <option value="">Certificate</option>
          <option value="">Diploma</option>
          <option value="">Highest National Diploma (HND)</option>
          <option value="">Bachelor's Degree</option>
          <option value="">Masters</option>
        </select>




        <label htmlFor="">
          Grade
        </label>
        <input type="text" />



        <label htmlFor="">
          Date of Enrollment
        </label>
        <input type="text" />



        <label htmlFor="">
          Date of Completion
        </label>
        <input type="text" />

      </form>

    </div>
  )
}

export default AddEducation