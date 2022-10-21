import React from 'react';
import ProductInfo1 from '@containers/ProductInfo1'
import Cart from '@components/Cart'
import '@styles/OrdersPopup.scss';

const CookiesPopup = () => {
    return (
        <div>
        <div className="orders-popup">
                <ProductInfo1 />
                <Cart />
        </div>
        </div>
    );
}

export default CookiesPopup;