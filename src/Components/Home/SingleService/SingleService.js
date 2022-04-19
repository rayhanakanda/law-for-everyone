import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = (props) => {
    const navigate = useNavigate();
    const { service, img, details, price } = props.service;
    return (
        <div className='custom-shadow py-10 rounded-md'>

            <div className="rounded-lg border text-center">
                <img className="rounded-t-lg w-2/3 mx-auto" src={img} alt="" />
                <div className="p-5">
                    <h1 className='md:text-2xl text-lg font-medium mb-2'>{service}</h1>

                    <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">{details.slice(0,100)}...</p>
                    <p className='md:text-xl text-[#F2A540] text-lg md:font-semibold'>Price ${price}</p>

                </div>
                <button onClick={() => navigate('/checkout')} className='bg-[#F2A540] duration-500 hover:bg-[#c96304] px-4 py-2 rounded-full text-white'>Select Service</button>
            </div>

        </div>
    );
};

export default SingleService;