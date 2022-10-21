import React, { useState } from 'react';
import cookiescover from '@icons/cookiescover.png';
import CookiesPopup from '@containers/CookiesPopup';

const CookiesButton = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className='categories-button'>
            <button className='category-button' onClick={handleToggle}><img src={cookiescover} alt='galletas' className='category-icon' /></button>
            {toggle && <CookiesPopup />}          
        </div>
    );
}

export default CookiesButton; 