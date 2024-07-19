import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';

const PageLoader = () => {
    return (
        <div className='flex items-center h-screen justify-center'>
            <InfinitySpin
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    )
}

export default PageLoader