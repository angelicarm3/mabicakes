import React from 'react';
import maincover from '@icons/maincover.png';
import Header from '@containers/Header';
import Footer from '@containers/Footer';
import '@styles/Home.scss';


const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <img src={maincover} alt='portada' className='cover' />
            <Footer />
        </div>
    );
}

export default Home;