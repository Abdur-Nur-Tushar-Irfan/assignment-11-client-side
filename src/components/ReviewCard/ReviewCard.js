import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const ReviewCard = ({ review }) => {
    const { user } = useContext(AuthContext)
    const { photoURL, message,date } = review
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-5 flex-col">
                <div className='items-center flex '>
                    <figure><img className='rounded-full p-4' src={user?.photoURL} alt="Movie" /></figure>
                    <div>
                    <h1>{user?.displayName}</h1>
                    <h1>date: {date}</h1>
                    </div>
                    
                </div>
                
                <div className="card-body">

                    <p className='text-2xl'>Reviews: {message}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-ghost">Delete</button>
                        <button className="btn btn-ghost">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;