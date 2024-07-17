import React from 'react'
import NavBar from '../../../../components/NavBar'

const AddProjects = () => {
    const handleClick = () => {
        const userConfirmed = window.confirm("Do you want to submit?");
        if (userConfirmed) {
          alert("Submitted!");
          // Perform your submit action here
        }
      };
    
    return (
        <>
            <NavBar />
            <div>
                <form action=""
                className='flex flex-col'>

                    <label htmlFor="">
                    Project Name
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                    Program
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                    Contributors
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                    Skills
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                    Link
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                    Name of Institution
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                    Start Date
                    </label>
                    <input type="date" />



                    <label htmlFor="">
                    End Date
                    </label>
                    <input type="date" />

                    <button 
                    onClick={handleClick}>Submit</button>
                </form>
            </div>
        </>

    )
}

export default AddProjects