import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl mb-4 text-white'>Explore Our Services</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mx- gap-3  text-amber-500 mb-3 mx-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}


                    ></Service>)
                }
            </div>
            <div className='mb-4'>
                <Link to='/allservices'><button className="btn btn-primary">Show All Our Services</button></Link>
            </div>


        </div>
    );
};

export default Services;