import React from 'react';
import './Header.css';
import { LOGOUT } from '../../redux/types/userTypes';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {

    let history = useHistory();
    const bringMeTo = () => {
        history.push('/profile')
    } 

    const getName = (name) => {
        
        return name;
    }

    const logOut = async => {
        setTimeout(()=> {
            props.dispatch({ type: LOGOUT, payload : {}});
        },500);
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
                    <div className="hello-title" onClick={()=>bringMeTo()}>
                        <p>Hello {getName(props.user.name)}!</p>
                    </div>
                    <div className="log-out"onClick={()=>logOut()}>
                        <FontAwesomeIcon icon={faSignOutAlt}/>
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


