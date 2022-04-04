import React from 'react';
import "./Header.css";


const Header = () => {
    return (



        <nav className='header'>
            <a href='/'>Home</a>
            <a href='/review'>Review</a>
            <a href='/dashboard'>Dashboard</a>
            <a href='/blogs'>Blogs</a>
            <a href='/about'>About</a>
        </nav>
    );
};

export default Header;