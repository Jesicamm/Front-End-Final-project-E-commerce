import React from 'react';
import './Header.css';
import { LOGOUT } from '../../redux/types/userTypes';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {

    const [totalProducts,setTotalProducts]= useState([])
    console.log(props.user);
    let history = useHistory();
    const bringMeTo = () => {
        history.push('/profile')
    }

    const bringMeToCart = () => {
        history.push('/carrito')
    }

    const getName = (name) => {
        
        return name;
    }

    const logOut = async => {
        setTimeout(()=> {
            props.dispatch({ type: LOGOUT, payload : {}});
        },500);
        history.push('/')
    }

    return (
        <div className='content-header'>
            {
                !props.user?._id
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
            <div className="cart-icon"onClick={()=>bringMeToCart()}>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </div>
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
                    <div className="hello-title" onClick={()=>bringMeTo()}>
                        <p>Hello {getName(props.user.name)}!</p>
                    </div> 
                    <div className="cart-icon"onClick={()=>bringMeToCart()}>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </div>

                    <div className="log-out"onClick={()=>logOut()}>
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                    </div>
                
                    <p>{totalProducts}</p>
                
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


