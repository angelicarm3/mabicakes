import React from 'react';
import {Link} from 'react-router-dom';
import cakepopscover from '@icons/cakepopscover.png';

const CakepopsButton = () => {
       return (
        <div className='categories-button'>
            <Link to='/cakepops'>
                <button className='category-button'><img src={cakepopscover} alt='cakepops' className='category-icon' /></button>
            </Link>            
        </div>
    );
}

export default CakepopsButton; 