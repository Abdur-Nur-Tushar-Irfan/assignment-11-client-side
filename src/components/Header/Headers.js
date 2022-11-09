
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import images from '../../assets/images.jpg'
import useTitle from '../../hooks/useTitle';

const Headers = () => {
    const { user, logOut } = useContext(AuthContext)
    useTitle('Header')
    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('successfully log out')
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-neutral text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            {
                                user?.displayName ?
                                    <>
                                        <li><Link to='/home'>Home</Link></li>

                                        <li><Link to='/blog'>Blog</Link></li>
                                        <li><Link to='/addservice'>Add Service</Link></li>
                                        <li><Link to='/myreview'>My Review</Link></li>

                                    </>

                                    :

                                    <>

                                        <li><Link to='/home'>Home</Link></li>

                                        <li><Link to='/blog'>Blog</Link></li>
                                        <li><Link to='/addservice'>Add Service</Link></li>
                                    </>
                            }

                        </ul>
                    </div>
                    <div className="w-10 rounded-full flex">
                        <img className='rounded-full' src={images} />
                        <Link to='/home' className="btn btn-ghost normal-case text-xl">Photography</Link>
                    </div>
                    
                   
                </div>
               
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.displayName ?
                                <>
                                    <li><Link to='/home'>Home</Link></li>

                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/addservice'>Add Service</Link></li>
                                    <li><Link to='/myreview'>My Review</Link></li>

                                </>
                                :
                                <>

                                    <li><Link to='/home'>Home</Link></li>

                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/addservice'>Add Service</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <div className="navbar-end mx-4">
                   

                    {
                        user?.displayName ?

                            <>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <Link onClick={handleSignOut} className='btn btn-ghost'>Log out</Link>
                            </>
                            :
                            <>

                                <Link to='/login'>Log in</Link>

                            </>

                    }

                </div>
            </div>

        </div >
    );
};

export default Headers;