import React from 'react';
import useService from '../../../Hooks/useService';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services] = useService()
    return (
        <div className='mt-28'>
            <h1 className='md:text-4xl text-3xl font-medium text-center py-4'>Services I offer</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                {
                    services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;