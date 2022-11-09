import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import Review from '../Review/Review';


const ShowDetails = () => {
    const services = useLoaderData()
    // console.log(services)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://assignment-11-server-cyan.vercel.app/reviews?serviceName=${services.title}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    const { image_url, details, total_view, title, _id } = useLoaderData()
    const { user } = useContext(AuthContext)
    const handleInsert = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const date = form.date.value;
        const name = form.name.value;
        const message = form.message.value;
        const photoURL = form.photoURL.value;
        const reviews = {

            serviceName: title,
            serviceId: _id,
            email,
            name,
            message,
            photoURL,
            date
        }
        fetch('https://assignment-11-server-cyan.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('inserted successfully')
                form.reset();

            })
            .catch(error => console.error(error))

    }


    return (
        <div>
            <div className="hero  bg-black text-amber-700">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center lg:text-left border lg:p-6 p-0">
                        <p className='text-4xl mb-3 text-cyan-800 text-center'>{title}</p>
                        <img className='h-80  w-full' src={image_url} />
                        <p className="py-6">{details}</p>
                        <div className='text-center text-2xl'>Total-views: {total_view}</div>

                    </div>


                    <div>
                        <div className="card  bg-base-100 shadow-xl mb-4">
                            <div className='p-4'>
                                {
                                    reviews.length === 0 ?

                                        <p>You have No Review</p>

                                        :
                                        <>
                                            {
                                                reviews.map(revw => <Review
                                                    key={revw._id}
                                                    revw={revw}

                                                ></Review>)
                                            }

                                        </>
                                }



                            </div>
                        </div>
                        {
                            user?.displayName ?
                                <form onSubmit={handleInsert} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">

                                    <div className="card-body">
                                        <div className="form-control">

                                            <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly />
                                        </div>
                                        <div className="form-control">

                                            <input type="text" name='name' required placeholder="Your Name" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">

                                            <input type="text" name='photoURL' required placeholder="Your Photo" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">

                                            <input type="date" name='date' required placeholder="" className="input input-bordered" />
                                        </div>


                                        <textarea className="textarea textarea-bordered" name='message' placeholder="Your review"></textarea>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Add Review</button>
                                        </div>
                                    </div>
                                </form>
                                :
                                <>
                                    <p>Log in first for Review</p>

                                </>


                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ShowDetails;