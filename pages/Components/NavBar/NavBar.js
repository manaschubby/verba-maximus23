import React from 'react';
const NavBar = () => {
    return (
        <div className='navbar'>

            <a href='#main' relative="path"><img src="/VM.jpeg" className='logo'/></a>
            <div className='headers'>
                <div className='element'> 
                    <a href='#main'>Home</a>
                </div>
                <div className='element'>
                    <a href='#events'>Events</a>
                </div>
                <div className='element'>
                    <a href='#contact'>Contact Us</a>
                </div>
                <div className='element'>
                    <a className='register' href='#main'>Register</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
