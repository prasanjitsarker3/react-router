import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center gap-2 pt-8'>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/friends">Friends</Link>

            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
        </div>
    );
};

export default Header;