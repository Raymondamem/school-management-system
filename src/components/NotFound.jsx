import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound(prop) {
    console.log(prop.children);
    return (
        <div className="h-[100svh] flex flex-col text-white justify-center items-center">
            <h1 className="text-[red] text-[5rem]">Page Not Found</h1>
            <p className="text-white text-[2rem]">Please go back <NavLink to="/"
                className="underline underline-offset-4 hover:text-[red] duration-300">Home</NavLink></p>
        </div>
    );
}