import React from 'react';
import Header from '@containers/Header';
import Categories from '@containers/Categories';
import Footer from '@containers/Footer';
import '@styles/Products.scss';

const Products = () => {
    return (
        <div className='products-page'>
            <Header />
            <Categories />
            <Footer />
        </div>
    );
}

export default Products;