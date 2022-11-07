import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ShowDetails = () => {
    const {image_url,details,total_view,title} = useLoaderData()
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left border">
                        <p className='text-4xl mb-3 text-cyan-800 text-center'>{title}</p>
                        <img className='h-80 w-full' src={image_url}/>
                        <p className="py-6">{details}</p>
                        <div>Total-views: {total_view}</div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
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