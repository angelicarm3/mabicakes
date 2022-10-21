import React from 'react';
import fblogo from '@logos/fblogo.png';

const FacebookButton = () => {
       return (
        <div className='fb-button'>
            <a target="_blank" href="https://www.facebook.com/mabicakes">
                <button className='primary-button'><img src={fblogo} alt='www.facebook.com/mabicakes' className='fb-icon' /></button>
            </a>            
        </div>
    );
}

export default FacebookButton; 
