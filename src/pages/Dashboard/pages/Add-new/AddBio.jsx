import React from 'react'

const AddBio = () => {
    return (
        <div>
            <form action=""
                className='flex flex-col'>

                <label htmlFor="">Profile picture</label>
                <input type="file" />

                <label htmlFor="">
                    Full Name
                </label>
                <input type="text" 
                className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
                />



                <label htmlFor="input" className="block text-sm font-medium text-gray-700">
                    Gender:
                </label>
                <input
                    type="text"
                    id="input"
                    name="level"
                    list="levels"
                    className="mt-1 block w-full p-2 border  rounded-md shadow-sm  sm:text-sm"
                />
                <datalist id="levels">
                    <option value="Male" />
                    <option value="Female" />
                </datalist>



                <label htmlFor="">
                    Date of Birth
                </label>
                <input type="date" name="" id="" 
                className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
                />


                <label htmlFor="">
                    Location
                </label>
                <input type="text" 
                className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
                />



                <label htmlFor="">
                    About you
                </label>
                <textarea name="" id=""
                className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
                >
                </textarea>



                {/* contact section */}
                <h1>CONTACT</h1>
                <label htmlFor="">Email</label>
                <input type="text" 
                className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
                />

                <label htmlFor="">
                    Phone Number
                </label>
                <input type="text" name="" id=""
                className="mt-1 block w-full p-2 border  rounded-md shadow-sm focus sm:text-sm"
                />

                <label htmlFor="">
                    Address
                </label>
                <input type="text" 
                className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
                />
                {/* contact section ended */}



                <label htmlFor="">
                    Spoken Languages
                </label>
                <input type="text"
                className="mt-1 block w-full p-2 border  rounded-md shadow-sm sm:text-sm"
                />


                <label htmlFor="input" className="block text-sm font-medium text-gray-700">
                    Level of Proficiency:
                </label>
                <input
                    type="text"
                    id="input"
                    name="level"
                    list="levels"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm  sm:text-sm"
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

                </label>

                <label htmlFor="">
                    Link to your GitHub repository
                </label>
                <input type="date" name="" id="" 
                className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
                />


                {/* social media links */}
                <h1>Socials</h1>
                <label htmlFor="">
                    LinkedIn
                    </label>
                <input type="text" 
                className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
                />

                <label htmlFor="">
                    Instagram
                </label>
                <input type="text" 
                className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
                />

                <label htmlFor="">
                    X
                </label>
                <input type="text" 
                className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm"
                />


            </form>
        </div>
    )
}

export default AddBio