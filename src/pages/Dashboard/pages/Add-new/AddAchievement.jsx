import React, { useState } from 'react'
import NavBar from '../../../../components/NavBar'

const AddAchievement = () => {
    const [formField, setFormField] = useState("");

    const handleChange = (event) => {
      setFormField(event.target.value);
    };
  
    const handleSubmit = () => {
      if (!formField) {
        window.alert("Cannot submit empty form");
        return;
      }
  
      const userConfirmed = window.confirm("Are you sure you want to add a new achievement?");
      if (userConfirmed) {
        alert("New Achievement submitted successfully!");
        // Perform your submit action here
      }
    };
  

    return (
        <>
            <NavBar />
            <div>


                <form action="" className='flex flex-col'>


                    <label htmlFor="">
                        Award name or Achievement
                    </label>
                    <input type="text" 
                    value={formField} 
                    onChange={handleChange} />


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

                    <button onClick={handleSubmit}>SUBMIT</button>
                </form>
            </div>
        </>
    )
}

export default AddAchievement