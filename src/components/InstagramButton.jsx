import React from 'react';
import iglogo from '@logos/iglogo.png';

const InstagramButton = () => {
       return (
        <div className='ig-button'>
            <a target="_blank" href="https://www.instagram.com/mabicakes">
                <button className='primary-button'><img src={iglogo} alt='www.instagram.com/mabicakes' className='ig-icon' /></button>
            </a>            
        </div>
    );
}

export default InstagramButton; 
