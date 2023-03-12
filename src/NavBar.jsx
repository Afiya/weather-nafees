import React from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <>
        <div className='menu'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/Live-Weather-Status">Live Weather</NavLink>
            </div>
        </>
    )
}

export default NavBar;