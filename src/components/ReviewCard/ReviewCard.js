import React, { useContext, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const ReviewCard = ({ review,handleDelete }) => {
    const { user } = useContext(AuthContext)
    const { photoURL, message, date ,_id,name} = review
    
  
   
    return (
        <div>
            <div className="card lg:card-side bg-base-100 mb-5 shadow-xl ">
                <div className='flex items-center p-4'>
                    <figure><img className='rounded-full mx-2' src={user?.photoURL} alt="Album" /></figure>

                    <div>
                        <p>{user?.displayName}</p>

                        <p>Date: {date}</p>
                    </div>

                </div>

                <div className="card-body">

                    <p className='text-2xl '>Reviews: {message}</p>
                    <p>Name: {name}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;