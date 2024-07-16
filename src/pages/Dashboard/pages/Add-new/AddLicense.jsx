import React from 'react'
import NavBar from '../../../../components/NavBar'

const AddLicense = () => {
    return (

        <>
            <NavBar />
            <div>

                <form action=""
                 className='flex flex-col'>

                    <label htmlFor="">
                        Name of License Obtained
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Issuing Organization
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Date of Issue
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Date of Expiration
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        License or Credential Number
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Credential URL if any
                    </label>
                    <input type="text" />




                    <label htmlFor="">
                        Skills
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Media
                    </label>
                    <input type="text" />

                </form>

            </div>
        </>

    )
}

export default AddLicense