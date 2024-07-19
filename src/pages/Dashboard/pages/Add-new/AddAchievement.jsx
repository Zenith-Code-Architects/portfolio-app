 import React, { useState } from 'react'
import NavBar from '../../../../components/NavBar'

const AddAchievement = () => {

    return (
        <>
            <NavBar />
            <div>


                <form action="" className='flex flex-col'>


                    <label htmlFor="">
                        Award name or Achievement
                    </label>
                    <input type="text" 
                     />


                    <label htmlFor="">
                        Description
                    </label>
                    <textarea name="description" id="description">
                    </textarea>


                    <label htmlFor="">
                        Image of Award or Achievement
                    </label>
                    <input type="file" />


                    <label htmlFor="">
                        Date Obtained
                    </label>
                    <input type="date" />


                    <label htmlFor="">
                        Name of Organization
                    </label>

                    <button>SUBMIT</button>
                </form>
            </div>
        </>
    )
}

export default AddAchievement