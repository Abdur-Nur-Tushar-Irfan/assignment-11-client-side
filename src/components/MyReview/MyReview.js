import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../UserContext/UserContext';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReview = () => {
    useTitle('My Review')
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

     const handleDelete =(id)=>{
        const proceed=window.confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
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
    const handleUpdate=(id)=>{
        fetch(`http://localhost:5000/reviews/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify()
        })

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