import React from 'react';
import './Header.css';

import Button from '../Button/Button';



const Header = () => {
    

    return (
        <div className='content-header'>
            <div className='hort'>
                <p>La Huerta de Marian</p>
            </div>

            <div className='spacer'></div>

            <div>
                <Button name='Iniciar Sesión/Registro' path='sesion'/>
            </div>
            <div>
                <Button name='Tienda' path='tienda'/>
            </div>
            
            <div>
                <Button name='Cestas Preparadas' path='cestas'/>
            </div>
        </div>
    )
}


export default Header;