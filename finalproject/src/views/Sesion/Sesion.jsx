
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import checkError from '../../My-tools/My-tools';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userTypes';
import './Sesion.css';


const Sesion = (props) => {

    const [credentials, setCredentials] = useState({ email: '', password: '' });

const [showRegister, setShowRegister] = useState(true)

    const changeForm= () => setShowRegister(!showRegister)
    const handler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const [registerMessage, setRegisterMessage] = useState('');
    const [loginMessage, setLoginMessage] = useState('');



    const sendDataLogin = async () => {

        setLoginMessage('');

        let notValidated = checkError(credentials)
        setLoginMessage(notValidated);

        if (notValidated) {
            return;
        };

        let credentialsData = {
            email: credentials.email,
            password: credentials.password,

        };

        let response = await axios.post('http://localhost:3002/users/login', credentialsData);
        let guardado = props.dispatch({ type: LOGIN, payload: response.data.jwt });
        console.log(guardado)


        if (guardado.payload.user.role === 'basic') {
            history.push('/profile')
        }

        if (guardado.payload.user.role === 'admin') {
            history.push('/admin')
        }

        /*  if (response.status === 200) {
            setTimeout(() => {
                history.push('/profile')
            }, 1000);
        } else {
            setLoginMessage('Sus credenciales son erroneos, comprueba su email o contraseña');
            window.confirm('Sus credenciales son erroneos, comprueba su email o contraseña');
        }  */
    }


    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        address: "",
        country: "",
        city: "",
        postal: "",
        
    });



    const handleState = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    const sendDataRegister = async () => {

        // Check for erros---------------------//
        setRegisterMessage('');

        let notValidated = checkError(user)
        setRegisterMessage(notValidated);

        if (notValidated) {
            return;
        }

        let userData = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            address: user.address,
            phone: user.phone,
            country: user.country,
            city: user.city,
            postal: user.postal
        };

        let endpointUser = 'http://localhost:3002/users';

        let response = setTimeout(async () => {
            await axios.post(endpointUser, userData);
        }, 1000)
        if (response) {
            alert('Usuario Registrado Con Exito');
        } else {
            alert('Lo siento , no se pudo completar el registro, vuelve a intentarlo mas tarde');
        }
    };

    return (

        <div className='content-sesion'>
            <button onClick={changeForm}>{showRegister ? "Login" : "Registro"}</button>
            {showRegister ?
            
            <div className="container-register">
                
                <h3 className="register-title">Registro</h3>
                <div className='register'>

                    <div className='register-row'>
                        <div className="form-content-inputs-register">
                            <p className='form-label-name'>Nombre</p>
                            <input name='name' className="form-input-register-name" onChange={handleState}></input>

                            <p className='form-label-surname'>Apellidos</p>
                            <input name='surname' className="form-input-surname" onChange={handleState}></input>

                            <div className="phone">
                                <p className='form-label-phone'>Teléfono de contacto</p>
                                <input name="phone" className="form-input-phone" onChange={handleState}></input>
                            </div>

                            <p className='form-label-adress'>Direccíon</p>
                            <input name='address' className="form-input-adress" onChange={handleState}></input>
                        </div>



                        <div className="city-country">
                            <p className='form-label-country'>Pais</p>
                            <input name="country" className="form-input-country" onChange={handleState}></input>
                        </div>
                    </div>
                    <div className='register-row'>
                        <div className="city-city">
                            <p className='form-label-city'>Ciudad</p>
                            <input name="city" className="form-input-city" onChange={handleState}></input>
                        </div>
                        <div className="city-cp">
                            <p className='form-label-cp'>CP</p>
                            <input name="postal" className="form-input-cp" onChange={handleState}></input>

                        </div>

                        <p className='form-label-email'>Email</p>
                        <input name='email' className="form-input-email" onChange={handleState}></input>
                        <div className="form-password-register">
                            <p className='form-label-password' >Contraseña</p>
                            <input type='password' name='password' className="form-input-password" onChange={handleState}></input>
                        </div>

                        <div className='register-message'>{registerMessage}</div>

                    </div>

                </div>
                <div className="button-div">
                    <button onClick={sendDataRegister} className="form-button-register">
                        Registrarse
                    </button>
                </div>
            </div>
            :
            <div className='login'>
                <h3 className="login-title">Login</h3>
                <div className="llogin-containerogin-container">
                <p className='form-label-login-email'>Email</p>
                <input name='email' className="form-label-login-email" onChange={handler}></input>
                    <p className='form-label-password-login' >Contraseña</p>
                <input type='password' name='password' className="form-input-password" onChange={handler}></input>
                <div className='login-message'>{loginMessage}</div>
                </div>
                <button onClick={sendDataLogin} className="form-button-login">
                    Login
                </button>
            
            </div>
        }
        </div>

        
    )
}



export default connect()(Sesion);