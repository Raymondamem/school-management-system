import React from "react";
import img1 from '/imgs/pexels-anna-tarazevich-5697254.jpg'; 

export default function FormLayout(prop) {
    console.log(prop.children);
    return (
        <>
            <h1 className='text-7xl text-left text-slate-800 hover:text-[red] duration-300'>STUDENTS' <span className='text-[red]'>FARES</span></h1>
            <div className='flex justify-between flex-row gap-5 py-[2rem]'>
                <div className="backdroper none w-[50%] relative">
                    <img src={img1} alt={img1} className='block w-[100%] object-cover' />
                </div>
                <div className='w-[50%] flex flex-col justify-start item-start text-slate-800'>
                    {prop.children}
                </div>
            </div>
        </>
    );
}