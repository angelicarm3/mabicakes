import React from 'react';
/*import '@styles/OrderForms.scss';*/

const Form1 = () => {
    return (
        <div className='order-form'>
            <form action='/' className='forms'>
                <label htmlFor="quantity">Porciones</label>
                <select id="quantity" name="quantity" size="1">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <label htmlFor="flavor">Sabor</label>
                <select id="flavor" name="flavor" size="1">
                    <option value="vainilla">Vainilla</option>
                    <option value="chocolate">Chocolate</option>
                </select>
                <label htmlFor="decoration">Decoración</label>
                <select id="decoration" name="decoration" size="1">
                    <option value="glaseado">Glaseado</option>
                    <option value="fondant">Fondant</option>
                </select>
                <label htmlFor="bow">Moñito decorativo</label>
                <select id="bow" name="bow" size="1">
                    <option value="azul">Azul</option>
                    <option value="rojo">Rojo</option>
                    <option value="amarillo">Amarillo</option>
                    <option value="morado">Morado</option>
                    <option value="naranja">Naranja</option>
                    <option value="verde">Verde</option>
                    <option value="rosado">Rosado</option>
                    <option value="dorado">Dorado</option>
                    <option value="plateado">Plateado</option>
                </select>
                <label htmlFor="theme">Temática</label>
                <input type="text" id="theme" name="theme" placeholder='Describa la temática para decorar' />
                <input type='submit' value='Enviar' className='secondary-button' />
            </form>
        </div>
    );
}

export default Form1;