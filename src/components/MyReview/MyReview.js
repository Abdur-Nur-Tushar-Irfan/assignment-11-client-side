import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            my review: {reviews.length}
            <div className='m-10 '>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}


                    ></ReviewCard>)
                }
            </div>




        </div>
    );
};

export default MyReview;