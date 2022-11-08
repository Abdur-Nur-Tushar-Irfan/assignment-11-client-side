import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { image_url, title, details, _id } = service
    return (
        <div>
            <div className="card w-full bg-black shadow-3xl">
                <PhotoProvider>
                    <PhotoView src={image_url}>
                    <figure><img className='h-64 w-full' src={image_url} alt="Shoes" /></figure>
                       
                    </PhotoView>
                </PhotoProvider>
               
                <div className="card-body">
                    <h2 className="card-title">
                        {title}

                    </h2>
                    <p>{details.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/showDetails/${_id}`}> <button className="badge badge-outline">show details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;