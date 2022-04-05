import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Header.css";


const Header = () => {
    return (
        <nav className='header'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/review">Review</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
};

export default Header;