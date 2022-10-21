import React from 'react';
import {Link} from 'react-router-dom';
import cakesiclescover from '@icons/cakesiclescover.png';

const CakesiclesButton = () => {
       return (
        <div className='categories-button'>
            <Link to='/paletitas'>
                <button className='category-button'><img src={cakesiclescover} alt='paletitas' className='category-icon' /></button>
            </Link>            
        </div>
    );
}

export default CakesiclesButton; 