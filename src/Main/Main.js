import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Headers from '../components/Header/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;