import React from 'react';

const HomeReview = () => {
    return (
        <div>
            <h1 className='text-white text-3xl'></h1>
            <div className="hero" style={{ backgroundImage: `url("https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Still,have a question?</h1>
                        <p className="mb-5">What Is Photography? Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image. With the right camera equipment, you can even photograph wavelengths of light invisible to the human eye, including UV, infrared, and radio.</p>
                        <button className="btn  btn-ghost">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;