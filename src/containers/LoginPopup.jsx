import React from 'react';
import '@styles/LoginPopup.scss';

const LoginPopup = () => {
    return (
        <div className="login-popup">
            <input type="checkbox" id="check" aria-hidden="true" />
            <div className="login-div">
                <form action='/' className='log-in-form'>
                    <label for="check" aria-hidden="true">Ingresa</label>
                    <input type="email" id="email" placeholder="Email" required="" />
                    <input type="password" id="password" placeholder="Contraseña" required="" />
                    <button className='secondary-button'>Ingresar</button>
                </form>
            </div>
            <div className="signup-div">
                <form action='/' className='sign-up-form'>
                    <label for="check" aria-hidden="true">Regístrate</label>
                    <input type="text" id="username" placeholder="Usuario" required="" />
                    <input type="email" id="email" placeholder="Email" required="" />
                    <input type="tel" id="phone" placeholder="Telefono" required="" />
                    <input type="password" id="password" placeholder="Contraseña" required="" />
                    <button className='secondary-button'>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPopup;