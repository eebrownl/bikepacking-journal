import React from 'react';
import bike from '../assets/white-bike.png';

const Header = () => {
    return (
        <header>
            <img src={bike} alt='bike' className='header--image'></img>
            <div className='header--title'>Bikepacking Journal</div>
        </header>
    )
}

export default Header;