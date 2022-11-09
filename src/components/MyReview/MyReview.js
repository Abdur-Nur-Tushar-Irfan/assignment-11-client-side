import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../UserContext/UserContext';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReview = () => {
    useTitle('My Review')
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://assignment-11-server-cyan.vercel.app/reviews?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res =>res.json())
            .then(data => setReviews(data))
    }, [user?.email])

     const handleDelete =(id)=>{
        const proceed=window.confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`https://assignment-11-server-cyan.vercel.app/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    alert('Deleted Successfully')
                    const remaining=reviews.filter(rwe=>rwe._id!==id);
                    setReviews(remaining)
                }
            })
        }

    } 
    return (
        <div>
           <h1></h1>
            <div className='m-10 flex-col'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}


                    ></ReviewCard>)
                }
            </div>




        </div>
    );
};

export default MyReview;