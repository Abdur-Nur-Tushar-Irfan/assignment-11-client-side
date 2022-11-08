// import React, { useContext } from 'react';
// import { Link, Navigate, NavLink } from 'react-router-dom';
// import images from '../../assets/images.jpg'



// import { AuthContext } from '../../UserContext/UserContext';
// import toast from 'react-hot-toast';

// const Headers = () => {
//     const { user, logOut } = useContext(AuthContext)
//     const handleSignOut = () => {
//         logOut()
//             .then(result => {
//                 toast.success('successfully log out')


//             })
//             .catch(error => console.error(error))

//     }
//     return (
//         <div>
//             <div className="navbar bg-slate-800">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>

//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
//                             <ul className="menu menu-horizontal p-0">
//                                 {
//                                     user?.displayName ?
//                                         <>
//                                         <li><NavLink className='font-bold text-white mx-5' to='/home'>Homeghf</NavLink></li>
//                                         <li> <NavLink className='font-bold text-white mx-5' to='/blog'>Blog</NavLink></li>


//                                                 <NavLink className='font-bold text-white ' to='/myreview'>My Review</NavLink>


//                                         </>
//                                         :
//                                         <>
//                                             <Link className='font-bold text-white mx-5' to='/home'>Home</Link>
//                                             <Link className='font-bold text-white mx-5' to='/blog'>Blog</Link>


//                                         </>
//                                 }

//                             </ul>
//                             {/* <div className='flex'>
//                                 <p className='text-white mx-2'>{user?.displayName}</p>
//                                 <div className="w-10">
//                                     <img className='rounded-full' src={user?.photoURL} />
//                                 </div>
//                             </div> */}
//                             <li className='text-white'>{user?.displayName ?
//                                 <>
//                                     <Link onClick={handleSignOut} className='mx-3 font-bold btn btn-ghost text-white'>Log out</Link>
//                                 </>
//                                 :
//                                 <>
//                                     <Link to='/login' className='mx-3 font-bold btn btn-ghost text-white'>Log in</Link>
//                                 </>
//                             }</li>
//                         </ul>

//                     </div>
//                     <Link to='/home' className="normal-case text-xl text-white"><div className='flex items-center'><img className='h-10 w-full mx-2 rounded-full' src={images} /><p>Photography</p></div></Link>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal p-0 ">
//                         {
//                             user?.displayName ?
//                                 <>

//                                        <NavLink className='font-bold text-white mx-5' to='/home'>Home</NavLink>
//                                        <NavLink className='font-bold text-white mx-5' to='/blog'>Blog</NavLink>
//                                        <NavLink className='font-bold text-white' to='/myreview'>My Review</NavLink>



//                                 </>

//                                 :
//                                 <>
//                                     <NavLink className='font-bold text-white mx-5' to='/home'>Home</NavLink>
//                                     <NavLink className='font-bold text-white mx-5' to='/blog'>Blog</NavLink>


//                                 </>
//                         }

//                     </ul>
//                 </div>

//                 <div className="navbar-end lg:flex hidden">
//                     <div className='flex items-center'>
//                         <p className='text-white mx-2'>{user?.displayName}</p>
//                         <div className="w-10">
//                             <img className='rounded-full' src={user?.photoURL} />
//                         </div>


//                     </div>

//                     {user?.displayName ?
//                         <>
//                             <Link onClick={handleSignOut} className='mx-3 font-bold btn btn-ghost text-white'>Log out</Link>
//                         </>
//                         :
//                         <>
//                             <Link to='/login' className='mx-3 font-bold btn btn-ghost text-white'>Log in</Link>
//                         </>
//                     }

//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Headers;

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
                                        <li><Link to='/myreview'>My Review</Link></li>

                                    </>

                                    :

                                    <>

                                        <li><Link to='/home'>Home</Link></li>

                                        <li><Link to='/blog'>Blog</Link></li>
                                    </>
                            }

                        </ul>
                    </div>
                    <div className="w-10 rounded-full">
                        <img className='rounded-full' src={images} />
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Photography</Link>
                   
                </div>
               
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.displayName ?
                                <>
                                    <li><Link to='/home'>Home</Link></li>

                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/myreview'>My Review</Link></li>

                                </>
                                :
                                <>

                                    <li><Link to='/home'>Home</Link></li>

                                    <li><Link to='/blog'>Blog</Link></li>
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