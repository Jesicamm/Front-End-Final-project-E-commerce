import React from 'react';
import './Header.css';

import Button from '../Button/Button';
import { connect } from 'react-redux';



const Header = (props) => {
    
    const getName = (name) => {
        
        return name;
    }

    return (
        <div className='content-header'>
            {
                !props.user
                ?
                <>
            <div className='hort'>
                <Button name='La Huerta de Marian' path=''/>
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
            </>
                :
                <>
                <div className='content-header'>
                    <div className='hort'>
                        <Button name='La Huerta de Marian' path=''/>
                    </div>
                    <div className='spacer'></div>
                    <div>
                        <Button name='Tienda' path='tienda'/>
                    </div>
                    <div className="hello-title">
                        <p>Hello {getName(props.user.name)}!</p>
                    </div>
                </div>
                </>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
} 
export default connect(mapStateToProps)(Header);


