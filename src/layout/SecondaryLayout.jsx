import React from 'react'
import Nav from '../components/Header/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const SecondaryLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default SecondaryLayout;