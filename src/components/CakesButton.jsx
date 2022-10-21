import React from 'react';
import {Link} from 'react-router-dom';
import cakescover from '@icons/cakescover.png';

const CakesButton = () => {
       return (
        <div className='categories-button'>
            <Link to='/pasteles'>
                <button className='category-button'><img src={cakescover} alt='pasteles' className='category-icon' /></button>
            </Link>            
        </div>
    );
}

export default CakesButton; 