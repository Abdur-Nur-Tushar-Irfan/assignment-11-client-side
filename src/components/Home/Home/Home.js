import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import HomeReview from '../HomeReview/HomeReview';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <HomeReview></HomeReview>
        </div>
    );
};

export default Home;