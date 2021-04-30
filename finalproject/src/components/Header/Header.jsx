import React from 'react';
import './Header.css';

import Button from '../Button/Button';



const Header = () => {
    
    return (
        <div className="content-header">
           
            <div>
              <Button name='Iniciar Sesión/Registro' path='sesion'/>
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