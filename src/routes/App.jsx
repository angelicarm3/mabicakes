import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Products from '@pages/Products';
import Cakes from '@pages/Cakes';
import Cupcakes from '@pages/Cupcakes';
import Cookies from '@pages/Cookies';
import Cakepops from '@pages/Cakepops';
import Brownies from '@pages/Brownies';
import Cakesicles from '@pages/Cakesicles';
import Cart from '@pages/Cart';
import Payment from '@pages/Payment';
import NotFound from '@pages/NotFound';
import '@styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/nuestros-productos' element={<Products />} />
                    <Route path='/pasteles' element={<Cakes />} />
                    <Route path='/cupcakes' element={<Cupcakes />} />
                    <Route path='galletas' element={<Cookies />} />
                    <Route path='/cakepops' element={<Cakepops />} />
                    <Route path='/brownies' element={<Brownies />} />
                    <Route path='paletitas' element={<Cakesicles />} />
                    <Route path='/carrito' element={<Cart />} />
                    <Route path='pago' element={<Payment />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;