import React from 'react';
import {Link} from 'react-router-dom';
import cupcakescover from '@icons/cupcakescover.png';

const CupcakesButton = () => {
       return (
        <div className='categories-button'>
            <Link to='/cupcakes'>
                <button className='category-button'><img src={cupcakescover} alt='cupcakes' className='category-icon' /></button>
            </Link>            
        </div>
    );
}

export default CupcakesButton;