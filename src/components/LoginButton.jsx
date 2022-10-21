import React, { useState } from 'react';
import LoginPopup from '@containers/LoginPopup';
import '@styles/LoginButton.scss';

const LoginButton = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className='login'>
            <button className='login-button' onClick={handleToggle}>
                Ingresar
            </button>
            {toggle && <LoginPopup />}
        </div>
    );
}

export default LoginButton;