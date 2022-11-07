import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';


const ShowDetails = () => {
    const {image_url,details,total_view,title} = useLoaderData()
    const {user}=useContext(AuthContext)
    
    return (
        <div>
            <div className="hero min-h-screen bg-black text-amber-700">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left border p-6">
                        <p className='text-4xl mb-3 text-cyan-800 text-center'>{title}</p>
                        <img className='h-80 w-full' src={image_url}/>
                        <p className="py-6">{details}</p>
                        <div className='text-center text-2xl'>Total-views: {total_view}</div>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                              
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ShowDetails;