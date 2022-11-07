import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import register from '../../assets/login.svg'
import { AuthContext } from '../../UserContext/UserContext';

const Register = () => {
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            handleUpdateUserProfile(name,photoURL)
            console.log(user)
            toast.success('regitered successfully')
            form.reset();

        })
        .catch(error=>{
            console.error(error)
        })
    }
    const handleUpdateUserProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL

        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))

    }
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-80 lg:text-left">
                  <img src={register}/>
                </div>

                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Register!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Your photo" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered"required />
                            <label className="label">
                                <p>already login? <Link className='text-cyan-700 font-bold' to='/login'>Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;