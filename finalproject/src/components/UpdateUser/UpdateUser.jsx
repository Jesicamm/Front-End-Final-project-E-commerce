import React, {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {Modal, TextField, Button} from "@material-ui/core" 
import {makeStyles} from "@material-ui/core/styles" 
import {UPDATE_USER} from '../../redux/types/userTypes';
import './UpdateUser.css';


const UpdateUser = (props) =>{
 
    const [userUpdate, setUser] = useState(props.user);

    const handleStateUpdate = (event) => {
        setUser({...userUpdate, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };


    // FUNCTIONS

   const submitUpdate = async () => {

        
        let response = await axios.put(`http://localhost:3002/users/${props.user._id}`, userUpdate);
        
        if (response) {
            let userUpdated = props.dispatch({type: UPDATE_USER, payload: userUpdate});
            console.log('userUpdated', userUpdated)
            alert('Datos actualizados con Exito');
        } else {
            alert('Lo siento , no se pudo actualizar el registro, vuelve a intentarlo mas tarde');
        }


    }

 
    return (
        <div className="update-content">
             
             <div className="header-update">
                <h2>Actualizar mis Datos</h2>
            </div>
            <div className="spacer-update"></div>
            <div className="form-modal-update">
                <div className='update-data'>
                    <p>Nombre</p>
                    <input type='text'className='update-input' name='name' title='Full Name' lenght='30' onChange={handleStateUpdate}></input> 
                </div>

                <div className='update-data'>
                    <p>Apellidos</p>
                    <input type='text' name='surname'className='update-input' title='Surname' lenght='30' onChange={handleStateUpdate}></input> 
                </div>

                <div className='update-data'>
                    <p>Email</p>
                    <input type='email' name='email' className='update-input'title='Email' lenght='30' onChange={handleStateUpdate}></input> 
                </div>

                <div className='update-data'>
                    <p>Teléfono de Contacto</p>
                    <input type='number' name='phone'className='update-input' title='Phone Number' lenght='12' onChange={handleStateUpdate}></input> 
                </div>

                <div className='update-data'>
                    <p>Fecha de Nacimiento</p>
                    <input type='date' name='birthday' className='update-input'title='Date of Birth' lenght='30' onChange={handleStateUpdate}></input>
                </div>

                <div className='update-data'>
                    <p>Dirección</p>
                    <input type='text' name='address' className='update-input'title='Full Address' lenght='250' onChange={handleStateUpdate}></input>
                </div>
                <div className='update-data'>
                    <p>País</p>
                    <input type='text' name='country'className='update-input' title='Country' lenght='250' onChange={handleStateUpdate}></input> 
                </div>

                <div className='update-data'>
                    <p>Ciudad</p>
                    <input type='text' name='city'className='update-input' title='City' lenght='250' onChange={handleStateUpdate}></input>
                </div>

                <div className='update-data'>
                    <p>Código postal</p>
                    <input type='text' name='postal' className='update-input'title='Postal' lenght='250' onChange={handleStateUpdate}></input>
                </div>
            </div>
            <div className="submitUpdate">
                <button className="submit-update" type='submit' name='submit' onClick={submitUpdate} title='Update Profile'>Guardar los cambios</button>
            </div>   
        </div>
    )
}
const mapStateToProps =state =>{
    return{
      user : state.user,
      token : state.token
    }
  };
  
export default connect(mapStateToProps)(UpdateUser);
