import Link from 'next/link';
import React from 'react';
const NavBar = () => {
    return (
        <div className='navbar'>
            <Link href='/#main' relative="path"><img src="/metamorphosisLogo.svg" className='logo'/></Link>
            <div className='headers'>
                <div className='element'> 
                    <Link href='/#main'>Home</Link>
                </div>
                <div className='element'>
                    <Link href='/events'>Events</Link>
                </div>
                <div className='element'>
                    <Link href='/#contact'>Contact Us</Link>
                </div>
                <div className='element'>
                    <Link className='register' href='/#main'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
