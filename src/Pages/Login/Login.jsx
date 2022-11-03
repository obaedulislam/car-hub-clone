import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF,  FaLinkedinIn} from "react-icons/fa";

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className="w-full mb-20">
        <div className=" grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left flex items-center">
                <img className='w-3/4 mx-auto' src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full  shadow-xl bg-base-100 py-16 px-7 border border-gray-50">
                <h1 className="text-5xl text-center font-semibold text-[#444444]">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#444444] text-lg">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#444444] text-lg">Confirm Password</span>
                        </label>
                        <input type="text" name='password' placeholder="Your password" className="input input-bordered" />
                        <label className="label">
                            <Link to='/singup' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <input className="btn bg-[#FF3811] border-[#FF3811] duration-300 text-white hover:text-[#FF3811] hover:bg-[#ff391100]  capitalize text-xl text-semibold " type="submit" value="Sign In" />
                    </div>
                </form>
             

                <div className='text-center '>
                    <p className='font-semibold'>-----Or Sing In With-----</p>
                    <div className='flex justify-center  mt-2'>
                    
                        <ul className='flex'>
                            <Link className='w-[45px] h-[45px] mx-[5px] bg-gray-100 border   hover:bg-[#fff] text-primary  rounded-full pt-3 flex justify-center' to='https://www.facebook.com/obaedulislam.mohammad/' target="_blank"><FaFacebookF className='text-xl'></FaFacebookF></Link>
                            <Link className='w-[45px] h-[45px] mx-[5px] bg-gray-100 border hover:bg-[#fff] text-primary  rounded-full pt-3 flex justify-center' to='https://www.linkedin.com/in/obaedulislam/' target="_blank"><FaLinkedinIn className='text-xl'></FaLinkedinIn></Link>
                            <Link className='w-[45px] h-[45px] mx-[5px] bg-gray-100 border   hover:bg-[#fff] text-primary  rounded-full pt-3 flex justify-center' to='https://www.instagram.com/obaedul_islam/' target="_blank"><FcGoogle className='text-xl'></FcGoogle></Link>

                        </ul>
                    </div>
                </div>
                <p className='text-center mt-5'>New to Genius Car <Link className='text-[#FF3811] font-bold' to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Login;