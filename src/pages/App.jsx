import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../assets/scss/style.css"
import Header from '../components/Header';
import Home from './Home';
import Footer from '../components/Footer';
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './Dashboard';
import NotFound from '../components/NotFound.jsx';

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className='bg-pattern text-dark-700 h-[100%] pt-[0rem]'>
        <div className='w-[90%] m-auto'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path={`/dashboard:${1}`} element={<Dashboard currentPage="Dashboard Home-page" />} />
            <Route path={`/dashboard:${1}/contact`} element={<Dashboard currentPage="Dashboard Contact school" />} />
            <Route path={`/dashboard:${1}/history`} element={<Dashboard currentPage="Dashboard history page" />} />
            <Route path={`/dashboard:${1}/payfee`} element={<Dashboard currentPage="Dashboard Payfee-page" />} />
          </Routes>
        </div>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
