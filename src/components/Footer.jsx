import React, { useRef } from 'react';
export default function Footer() {
    const footerDate = new Date().getFullYear();
    return (
        <p className='sticky bottom-0 bg-[black] flex text-white justify-center'>Copyright &copy; all rights reserved {footerDate}</p>
    );
}