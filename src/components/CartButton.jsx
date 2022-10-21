import React from 'react';
import {Link} from 'react-router-dom';
import cart from '@icons/cart.png';
import '@styles/CartButton.scss';

const CartButton = () => {
       return (
        <div className='cart-button'>
            <Link to='/carrito'>
                <button className='primary-button'><img src={cart} alt='carrito' className='cart-icon' /></button>
            </Link>            
        </div>
    );
}

export default CartButton; 