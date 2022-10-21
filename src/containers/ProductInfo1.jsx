import React from 'react';
import Form1 from '@components/Form1';
import '@styles/ProductInfo1.scss';

const ProductInfo1 = () => {
    return (
        <div className='product-info-1'>
            <div className='description'>
                <div className='tittle' >GALLETAS</div>           
                <div className='subtittle'>Nuestras deliciosas galletas vienen empacadas en bolsita transparente y con moñito decorativo. </div>
            </div>
            <Form1 />
            <div className='images'>imagenes</div>
        </div>
    );
}

export default ProductInfo1;