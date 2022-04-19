import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='mt-[76px]'>
            <h1 className='text-5xl md:text-8xl font-medium text-center mt-7 error'>ERROR!....</h1>
            <div className='md:flex px-3 md:px-0 justify-between items-center md:h-[65vh] container mx-auto'>
                <img className='rounded-lg md:w-2/5 my-6 md:my-0' src="https://i.ibb.co/5FWcvL0/Caring-Admired-Herculesbeetle-size-restricted.gif" alt="" />
                <div>
                    <h1 className='text-2xl md:text-5xl font-semibold'>Don't cry! It's just a 404</h1>
                    <div className='flex flex-col mt-6'>
                        <button onClick={() => navigate('/')} className='button text-sm md:text-md font-medium px-8 py-2 rounded text-white mb-4'>Go Back to Our Site</button>
                        <button onClick={() => navigate(-1)} className='button text-sm md:text-md font-medium px-8 py-2 rounded text-white'>Go Back to The Previous Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;