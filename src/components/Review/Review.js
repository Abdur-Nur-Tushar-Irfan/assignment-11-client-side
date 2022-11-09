import React from 'react';

const Review = ({ revw }) => {
    console.log(revw)
    const { date, name, photoURL,message } = revw

    return (
        <div>
            <div className='flex items-center mb-2'>
                <img className='mask mask-hexagon-2 w-10 mx-2' src={photoURL} />
                <div>
                <p>Name: {name}</p>
                <p>Review: {message}</p>
                <p>Date: {date}</p>
                </div>
                

            </div>



        </div>
    );
};

export default Review;