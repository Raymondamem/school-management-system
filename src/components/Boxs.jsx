import React, { useState } from 'react';

export default function Boxs(props) {
    const styles = {
        backgroundColor: props.on ? "white" : "black",
        color: props.on ? "black" : "white"
    }

    return (
        <div style={styles} onClick={props.toggle} className='w-[calc((100%/3)-16px)] h-[150px] border rounded grid place-items-center'>{props.id.toString().toUpperCase()}</div>
    )
}