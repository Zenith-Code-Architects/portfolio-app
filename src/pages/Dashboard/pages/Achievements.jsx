import React from 'react'
import PagesLayout from '../layouts/PagesLayout'

const Achievements = () => {
    return (
        <div>
            <PagesLayout headerText='Achievements'
                buttonText='Add New'
                children='' />
            <div>
                <form action="">

                    <div className='flex flex-col pl-5'>
                        <label
                            htmlFor="">
                            Awards
                        </label>

                        <input type="text"
                            placeholder='Name of award or achievement . . .'
                            className='w-1/2 h-10' />
                    </div>

                    <div className='flex flex-col pl-5'>

                        <label htmlFor="">
                            Date Obtained
                        </label>

                        <input type="date"
                            className='h-10'
                            placeholder='MM/DD/YY' />

                    </div>

                    <div className='flex flex-col pl-5'>

                        <label htmlFor="">
                            Issuing Organization
                        </label>

                        <input type="text"
                            className='h-10' />

                    </div>

                    <div>
                        <label htmlFor="">
                            Description
                        </label>
                        <textarea name=""
                            id="">

                        </textarea>
                    </div>

                    <div>
                        <label htmlFor="">
                            Image of Certificate or Citation
                        </label>
                        <input type="file" />
                    </div>

                </form>
            </div>
            <span>Achievements list here</span>

        </div>
    )
}

export default Achievements