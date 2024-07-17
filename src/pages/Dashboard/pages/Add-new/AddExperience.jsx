import React from 'react'
import NavBar from '../../../../components/NavBar'

const AddExperience = () => {
    return (
        <>
            <NavBar />
            <div>
                <form action="" className='flex flex-col'>


                    <label htmlFor="">
                        Name of Company
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Role
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Skills
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Job Description
                    </label>
                    <textarea name="description" id="description">
                    </textarea>



                    <label htmlFor="">
                        Location
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Location Type
                    </label>
                    <input type="radio" />



                    <label htmlFor="">
                        Start Date
                    </label>
                    <input type="date" />



                    <label htmlFor="">
                        End Date
                    </label>
                    <input type="date" />


                    <label htmlFor="">
                        Employment type
                    </label>


                </form>
            </div>
        </>
    )
}

export default AddExperience