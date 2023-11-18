import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function SignElements() {
    return (
        <>
            <NavLink to="/signin" className='text-sm duration-200 hover:text-white hover:bg-slate-800 py-4 px-3'>Signin</NavLink>
            <NavLink to="/signup" className='text-sm duration-200 hover:text-white hover:bg-slate-800 py-4 px-3'>Signup</NavLink>
        </>
    )
}

export default function Header() {
    let location = useLocation();

    return (
        <header className='fixed left-0 top-0 min-w-full bg-[white] z-10'>
            <div className='w-[90%] m-auto flex justify-between'>
                <Link to={"/"} className='flex justify-between pt-[1rem]'>
                    <span className='text-indigo font-black'>
                        Students' <span>Fairs</span>
                    </span>
                </Link>
                <nav className='w-3/5 flex justify-between font-semibold'>
                    <NavLink to="/" className='text-sm duration-200 hover:text-white hover:bg-slate-800 py-4 px-3'>Home</NavLink>
                    {(location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/") && <SignElements />}
                    <NavLink to={`/dashboard:${1}`} end className='text-sm duration-200 hover:text-white hover:bg-slate-800 py-4 px-3'>Dashboard</NavLink>
                    <NavLink to={`/dashboard:${1}/contact`} className='text-sm duration-200 hover:text-white hover:bg-slate-800 py-4 px-3'>Contact Us</NavLink>
                    <NavLink to={`/dashboard:${1}/history`} className='text-sm duration-200 hover:text-white hover:bg-slate-800 py-4 px-3'>History</NavLink>
                    <NavLink to={`/dashboard:${1}/payfee`} className='btn text-sm duration-200 text-white hover:bg-slate-800 py-4 px-3'>PayFee</NavLink>
                </nav>
            </div>
        </header>
    );
}
