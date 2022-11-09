import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Photography</h1>
                        <p className="mb-5">The word Photography literally means 'drawing with light', which derives from the Greek photo, meaning light and graph, meaning to draw</p>
                        <Link to='/allservices'><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;