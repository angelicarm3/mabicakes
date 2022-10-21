import React from 'react';
import logoblack from '@logos/logoblack.png';
import FacebookButton from '@components/FacebookButton'
import InstagramButton from '@components/InstagramButton'
import '@styles/Footer.scss'

const Footer = () => {
    return (
        <div className='footer-bar'>
            <img src={logoblack} alt='logoblack' className='logo-black' />
            <div className='social-media'>
                <FacebookButton />
                <InstagramButton />
            </div>
        </div>
    );
}

export default Footer; 