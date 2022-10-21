import React from 'react';
import {Link} from 'react-router-dom';
import '@styles/ProductsButton.scss';

const ProductsButton = () => {
       return (
        <div className='products'>
            <Link to='/nuestros-productos'>
                <button className='primary-button'>
                    Nuestros Productos
                </button>
            </Link>            
        </div>
    );
}

export default ProductsButton; 