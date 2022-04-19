import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../Assets/Images/logo.png'
import auth from '../../../firebase.init';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    //Handle signout
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            toast.success("Sign Out successful", {
                toastId: "signOutSuccess"
            });
        })
        navigate('/login');
    }
    return (
        <nav className=" text-white py-4 md:py-1 absolute top-0 z-50 bg-black shadow-lg bg-clip-padding bg-opacity-10 w-full">
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden cursor-pointer" >

                {open ? <ImCross className="h-4 w-4 ml-2"></ImCross> : <IoMdMenu className="h-6 w-6 ml-2"></IoMdMenu>}
            </div>

            <ul className={` w-full text-lg py-2 md:flex md:justify-between absolute md:static duration-500 ease-in-out container mx-auto ${open ? "top-14 bg-[#166534]" : "top-[-250px] bg-transparent"}`}>
                <div className="logo hidden md:block">
                    <img className='cursor-pointer' onClick={() => navigate('/')} src={logo} alt="" />
                </div>
                <div className="items md:flex">
                    <li className='p-2 md:mx-2 font-medium'><Link to="/blog">Blog</Link></li>
                    <li className='p-2 md:mx-2 font-medium'><Link to="/services">Services</Link></li>
                    <li className='p-2 md:mx-2 font-medium'><Link to="/checkout">Checkout</Link></li>
                    <li className='p-2 md:mx-2 font-medium'><Link to="/about">About</Link></li>
                    {
                        user ? <li className='p-2 md:mx-2 font-medium cursor-pointer' onClick={handleSignOut}>Sign Out</li> : <li className='p-2 md:mx-2 font-medium cursor-pointer' onClick={() => navigate('/login')}>Login</li>
                    }
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;