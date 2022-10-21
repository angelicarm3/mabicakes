import React from 'react';
import {Link} from 'react-router-dom';
import logo from '@logos/logo.png';
import '@styles/HomeButton.scss';

const HomeButton = () => {
       return (
        <div className='home'>
            <Link to='/'>
                <button className='primary-button'><img src={logo} alt='home' className='home-icon' /></button>
            </Link>            
        </div>
    );
}

export default HomeButton; 