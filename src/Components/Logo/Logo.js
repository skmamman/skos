import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import Sklogo from './Sklogo.png';

const Logo = () => {
    return(
        <div className='ma3 mt0'>
            <Tilt className="Tilt br2 shadow-2 br-100" options={{ max : 50 }}>
                <div className="Tilt-inner pa3"><img alt='logo' src={Sklogo}/></div>
            </Tilt>
        </div>
    );
}

export default Logo;