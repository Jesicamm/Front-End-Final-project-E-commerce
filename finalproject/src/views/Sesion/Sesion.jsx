import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import checkError from '../../My-tools/My-tools';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userTypes';
import './Sesion.css';
import Header from "../../components/Header/Header";
import SesionShop from '../../Img/sesion.jpg'


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

        /* let notValidated = checkError(credentials)
        setLoginMessage(notValidated);

        if (notValidated) {
            return;
        }; */

        let credentialsData = {
            email: credentials.email,
            password: credentials.password,

        };

        let response = await axios.post('http://localhost:3002/users/login', credentialsData);
        
        if (!response) {
            setLoginMessage('Sus credenciales son erroneos, comprueba su email o contraseña');
            window.confirm('Sus credenciales son erroneos, comprueba su email o contraseña');
        };
        
        let guardado = props.dispatch({ type: LOGIN, payload: response.data.jwt });
        

        if (guardado.payload.user.role === 'basic') {
            history.push('/profile')
        }

        if (guardado.payload.user.role === 'admin') {
            history.push('/admin')
        }

        
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
        <div className="content-sesion">
          <Header/>
          <div className='sesion-img'>
              <div className='sesion-img-text'>
                 <h5>Estás a punto de disfrutar de todas nuestras ofertas!!</h5>
              </div>
              <div className='sesion-img-container'> 
                <img className="image-sesion" src={SesionShop} alt="whatsapp"/>
              </div>
          </div>
          <div className='content-sesion-register-login'>
            <div className='sesion-modal-btn-content'>
                <button className='sesion-modal-btn' onClick={changeForm}>{showRegister ? "Login" : "Registro"}</button>
            </div>
            {showRegister ?
            
            <div className="container-register">
                
                <h3 className="register-title">CREAR UNA CUENTA</h3>
                <div className='register'>

                    <div className='register-row'>
                        
                            <p className='form-label-register'>Nombre</p>
                            <input name='name' className="form-input-register" onChange={handleState}></input>

                            <p className='form-label-register'>Apellidos</p>
                            <input name='surname' className="form-input-register" onChange={handleState}></input>

                            <div className="phone">
                                <p className='form-label-register'>Teléfono de contacto</p>
                                <input name="phone" className="form-input-register" onChange={handleState}></input>
                            </div>

                            <div className="birthday">
                                <p className='form-label-register'>Fecha de nacimiento</p>
                                <input name="birth" type='date' className="form-input-register" onChange={handleState}></input>
                            </div>

                            <p className='form-label-register'>Direccíon</p>
                            <input name='address' className="form-input-register" onChange={handleState}></input>
                        

                        
                    </div>
                    
                    <div className='register-row'>
                        <div className="city-country">
                                <p className='form-label-register'>Pais</p>
                                <input name="country" className="form-input-register" onChange={handleState}></input>
                        </div>
                        <div className="city-city">
                            <p className='form-label-register'>Ciudad</p>
                            <input name="city" className="form-input-register" onChange={handleState}></input>
                        </div>
                        <div className="city-cp">
                            <p className='form-label-cp'>CP</p>
                            <input name="postal" className="form-input-register" onChange={handleState}></input>

                        </div>

                        <p className='form-label-register'>Email</p>
                        <input name='email' className="form-input-register" onChange={handleState}></input>
                        <div className="form-password-register">
                            <p className='form-label-register' >Contraseña</p>
                            <input type='password' name='password' className="form-input-register" onChange={handleState}></input>
                        </div>
                    </div>
                        
                    </div>
                <div className="button-div">
                     <div className='register-message'><p>{registerMessage}</p></div>
                    <button onClick={sendDataRegister} className="sesion-press-btn">
                        Registrarse
                    </button>
                </div>
            </div>
            :
            <div className='login'>
                <h3 className="login-title">Iniciar Sesión</h3>
                <div className="login-container">
                <p className='form-label-login'>Email</p>
                <input name='email' className="form-label-login-input" onChange={handler}></input>
                    <p className='form-label-login' >Contraseña</p>
                <input type='password' name='password' className="form-label-login-input" onChange={handler}></input>
                <div className='login-message'>{loginMessage}</div>
                </div>
                <button onClick={sendDataLogin} className="sesion-press-btn">
                    Login
                </button>
            
            </div>
        }
        </div>
        </div>
        
    )
}



export default connect()(Sesion);