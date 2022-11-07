import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Home/Service/Service';

const AllServices = () => {
    const allservices = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-4 text-amber-700 shadow-2xl'>

                {
                    allservices.map(service => <Service service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default AllServices;