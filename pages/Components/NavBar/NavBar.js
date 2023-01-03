import Image from 'next/image';
import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='navbar'>

            <Link to="/" relative="path"><img src="/VM.jpeg" className='logo'/></Link>
            <div className='headers'>
                <div className='element'> 
                    <a href='/#main'>Home</a>
                </div>
                <div className='element'>
                    <a href='/#events'>Events</a>
                </div>
                <div className='element'>
                    <a href='/#contact'>Contact Us</a>
                </div>
                <div className='element'>
                    <Link className='register' to='register' href='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
