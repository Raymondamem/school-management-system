import React from 'react'
import Layout from '../components/FormLayout';

function HomeIntro() {

    return (
        <>
            <h3 className='font-[900] text-[2rem]'>What this platform offers?</h3>
            <p>An online platform that aids finatial activities such as school fees payments, hostell payment, students post and pre payments and students dashboard tracking. 🧧</p>
            <h3 className='font-[900] text-[1.5rem]'>More to what is offered?</h3>
            <p>Result checking and helpdesk.</p>
        </>
    );
}

export default function Home() {

    return (
        <Layout>
            <HomeIntro />
        </Layout>
    );
}