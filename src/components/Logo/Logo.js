import React from 'react';
import Tilt from 'react-tilt';
import diamond from './diamond.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br3 shadow-3" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3">
                    <img alt='logo' src={diamond} /> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;