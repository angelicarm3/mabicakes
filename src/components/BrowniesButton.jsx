import React from 'react';
import {Link} from 'react-router-dom';
import browniescover from '@icons/browniescover.png';

const BrowniesButton = () => {
       return (
        <div className='categories-button'>
            <Link to='/brownies'>
                <button className='category-button'><img src={browniescover} alt='brownies' className='category-icon' /></button>
            </Link>            
        </div>
    );
}

export default BrowniesButton; 
