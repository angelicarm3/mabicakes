import React from 'react';
import BrowniesButton from '@components/BrowniesButton';
import CakepopsButton from '@components/CakepopsButton';
import CakesButton from '@components/CakesButton';
import CookiesButton from '@components/CookiesButton';
import CakesiclesButton from '@components/CakesiclesButton';
import CupcakesButton from '@components/CupcakesButton';
import '@styles/Categories.scss';


const Categories = () => {
    return (
        <div className='categories'>
            <BrowniesButton />
            <CakesButton />
            <CupcakesButton />
            <CookiesButton />
            <CakepopsButton />            
            <CakesiclesButton />                          
        </div>
    );
}

export default Categories;