import React from 'react'
import NavBar from '../../../../components/NavBar'

const AddProjects = () => {
    return (
        <>
            <NavBar />
            <div>
                <form action="">

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
                </form>
            </div>
        </>

    )
}

export default AddProjects