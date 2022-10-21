import React from 'react';
import erroricon from '@icons/erroricon.png';
import '@styles/NotFound.scss';

const NotFound = () => {
       return (
        <div className='error'>
            <img src={erroricon} alt='error' className='error-icon' />
            <div className='error-h1'>404</div>
            <div className='error-h2'>Página no encontrada</div>
            <div className='error-h6'>La página que está buscando ha sido movida, eliminada o posiblemente nunca existió.</div>
        </div>
    );
}

export default NotFound;