import React from 'react';
import { useLocation } from 'react-router-dom';

function Group() {
    return (
        <>
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="fname">Name</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="text" id='fname' placeholder='e.g Raymond' />
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="sname">Surname</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="text" id='sname' placeholder='e.g Amem' />
        </>
    );
}

function Group1() {
    return (
        <>
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="cpassword">Confitrm Password</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="text" id='cpassword' placeholder='**********' />
        </>
    );
}

function SIgnupForm() {
    let location = useLocation();

    return (
        <form action={location.pathname === '/signup' ? "/signup/api/" : location.pathname === '/signin' ? "/signin/api/" : ""} method="post" className='w-[100%] flex flex-col'>
            <h3 className='font-[900] text-[2rem]'>{location.pathname === '/signup' ? "Signup" : "Signin"} 🧧</h3>
            {location.pathname === '/signup' && <Group />}
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="email">Email</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="email" id='email' placeholder='e.g raymondamem@gmail.com' />
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="password">Password</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="password" id='password' placeholder='**********' />
            {location.pathname === '/signup' && <Group1 />}
            <button type="submit" className='p-2 bg-dark-700 my-6 rounded-full hover:text-white hover:bg-slate-800'>Submit</button>
        </form>
    );
}

export default function FormElement() {
    return (
        <SIgnupForm />
    );
}