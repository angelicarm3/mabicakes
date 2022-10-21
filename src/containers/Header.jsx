import React from 'react';
import HomeButton from '@components/HomeButton'
import ProductsButton from '@components/ProductsButton'
import CartButton from '@components/CartButton'
import LoginButton from '@components/LoginButton'
import '@styles/Header.scss'

const Header = () => {
    return (
        <div className='header-bar'>
            <HomeButton />
            <ProductsButton />
            <CartButton />
            <LoginButton />
        </div>
    );
}

export default Header; 