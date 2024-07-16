import React from 'react'

const AddBio = () => {
    return (
        <div>
            <form action="">

                <label htmlFor="">Profile picture</label>
                <input type="file" />

                <label htmlFor="">
                    Full Name
                </label>
                <input type="text" />



                <label htmlFor="">
                    Date of Birth
                </label>
                <input type="date" name="" id="" />


                <label htmlFor="">
                    Gender
                </label>
                <select name="" id="">
                    <option value="">Male</option>
                    <option value="">Female</option>
                </select>


                <label htmlFor="">
                    Location
                </label>
                <input type="text" />



                <label htmlFor="">
                    About you
                </label>
                <textarea name="" id=""></textarea>



                <label htmlFor="">
                    Spoken Languages
                </label>
                <input type="text" />


                <label htmlFor="input" className="block text-sm font-medium text-gray-700">
                    Level of Proficiency:
                </label>
                <input
                    type="text"
                    id="input"
                    name="level"
                    list="levels"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                />
                <datalist id="levels">
                    <option value="A1 (Beginners)" />
                    <option value="A2 (Pre-Intermediate)" />
                    <option value="B1 (Intermediate)" />
                    <option value="B2 (Upper-Intermediate)" />
                    <option value="C1 (Advanced)" />
                    <option value="C2 (Proficient)" />
                </datalist>


                <label htmlFor="">
                    Date of Birth
                </label>
                <input type="date" name="" id="" />



                <label htmlFor="">
                    Date of Birth
                </label>
                <input type="date" name="" id="" />

            </form>
        </div>
    )
}

export default AddBio