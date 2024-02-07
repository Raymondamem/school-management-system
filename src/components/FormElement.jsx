import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Group({ handleInnerFormInputs }) {
    return (
        <>
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="fullName">FullName</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="text" onChange={handleInnerFormInputs} id='fullName' placeholder='e.g Raymond A. Amem' />
            {/* <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="sname">Surname</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="text" id='sname' placeholder='e.g Amem' /> */}
        </>
    );
}

function Group1({ handleInnerFormInputs }) {
    return (
        <>
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="cpassword">Confitrm Password</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="text" onChange={handleInnerFormInputs} id='cpassword' placeholder='**********' />
        </>
    );
}

function SIgnupForm({ handleFormInputs, handleFormSubmition }) {
    let location = useLocation();
    function handleInnerFormInputs(event) {
        return { handleFormInputs }
    }

    return (
        <form action={location.pathname === '/signup' ? "/signup/api/" : location.pathname === '/signin' ? "/signin/api/" : ""} method="post" className='w-[100%] flex flex-col' onSubmit={handleFormSubmition}>
            <h3 className='font-[900] text-[2rem]'>{location.pathname === '/signup' ? "Signup" : "Signin"} 🧧</h3>
            {location.pathname === '/signup' && <Group handleInnerFormInputs={handleInnerFormInputs} />}
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="email">Email</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="email" onChange={handleFormInputs} id='email' placeholder='e.g raymondamem@gmail.com' />
            <label className='underline text-[calc(1rem/2 + 5px)] mb-2' htmlFor="password">Password</label>
            <input className='p-[calc(.3rem)] rounded-full indent-4' type="password" onChange={handleFormInputs} id='password' placeholder='**********' />
            {location.pathname === '/signup' && <Group1 handleInnerFormInputs={handleInnerFormInputs} />}
            <button type="submit" className='p-2 bg-dark-700 my-6 rounded-full hover:text-white hover:bg-slate-800'>Submit</button>
        </form>
    );
}

export default function FormElement() {
    const [formInputs, setFormInputs] = useState(JSON.parse(localStorage.getItem("formInputs")) || {
        fullName: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    function handleFormInputs(event) {
        const { name, value, type, checked } = event.target;
        console.log(`type: ${type}, name: ${name}, value: ${value}, checked: ${checked}`);
        setFormInputs(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleFormSubmition(event) {
        event.preventDefault();
        if (formInputs.password === formInputs.confirmpassword) {
            console.log("Password currect!", formInputs);
            return;
        }
        console.log("Password incurrect!", formInputs);
        return;
    }

    return (
        <SIgnupForm
            handleFormInputs={handleFormInputs}
            handleFormSubmition={handleFormSubmition} />
    );
}