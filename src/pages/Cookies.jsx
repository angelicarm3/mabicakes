import React from 'react';
/*import '@styles/Cookies.scss';*/
import Header from '@containers/Header';
import CookiesPopup from '@containers/CookiesPopup';
import Footer from '@containers/Footer';

const Cookies = () => {
    return (
        <div className='cookies-page'>
            <Header />
            <CookiesPopup />
            <Footer />
        </div>
    );
}

export default Cookies;