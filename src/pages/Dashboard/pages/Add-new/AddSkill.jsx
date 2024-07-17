import React from 'react'
import NavBar from '../../../../components/NavBar'

const AddSkill = () => {
    return (
        <>
            <NavBar />
            <div >

                <form action=""
                className='flex flex-col'>
                    
                    <label htmlFor="">
                        Skill 
                    </label>
                    <input type="text" />



                    <label htmlFor="">
                        Level of Proficiency
                    </label>
                    <select name="" id="">
                        <option value="">Beginner</option>
                        <option value="">Basic</option>
                        <option value="">Intermediate</option>
                        <option value="">Advanced</option>
                        <option value="">Expert</option>
                        <option value="">Master</option>
                    </select>
                </form>

            </div>
        </>

    )
}

export default AddSkill