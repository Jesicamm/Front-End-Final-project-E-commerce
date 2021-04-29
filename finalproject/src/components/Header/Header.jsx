import React from 'react';
import './Header.css';

import Button from '../Button/Button';

import Logo from '../../Img/logo.png'

const Header = () => {
    
    return (
        <div className="content-header">
            <div className="logo-img">
                <img className="logo" src={Logo} alt="logo"/> 
            </div>
            <div>
              <Button name='Iniciar Sesión/Registro' path='mi-cuenta'/>
            </div>
            <div>
                <Button name='Tienda' path='tienda'/>
            </div>
            <div>
                <Button name='¿Quiénes somos?' path='contacto'/>
            </div>
            <div>
                <Button name='Cestas Preparadas' path='cestas'/>
            </div>
        </div>
    )
}


export default Header;