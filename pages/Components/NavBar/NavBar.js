import Image from 'next/image';
import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='navbar'>

            <Link to="/" relative="path"><img src="/VM.jpeg" className='logo'/></Link>
            <div className='headers'>
                <div className='element'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='element'>
                    <Link to='/events'>Events</Link>
                </div>
                <div className='element'>
                    <Link to='/contact'>Contact Us</Link>
                </div>
                <div className='element'>
                    <Link className='register' to='register' href='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
