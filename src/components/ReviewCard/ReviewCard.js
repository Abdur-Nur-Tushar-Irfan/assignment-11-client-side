import React, { useContext, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const ReviewCard = ({ review, handleDelete }) => {
    const { user } = useContext(AuthContext)
    const { photoURL, message, date, _id, name } = review
    

    const handleUpdate=(id)=>{
      fetch()


    }



    return (
        <div>
            <div className="card lg:card-side bg-base-100 mb-5 shadow-xl ">
                <div className='flex items-center p-4'>
                    <figure><img className='rounded-full mx-2 w-20' src={user?.photoURL} alt="Album" /></figure>

                    <div>
                        <p>{user?.displayName}</p>

                        <p>Date: {date}</p>
                    </div>

                </div>

                <div className="card-body">

                    <p className='text-2xl '>Reviews: {message}</p>
                    <p>Name: {name}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-6" className="btn">Update</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className='mb-2'>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                                </div>
                                <div className='mb-2'>
                                    <input type="date" placeholder="Type here" className="input input-bordered w-full " />
                                </div>
                                <div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn">X</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;