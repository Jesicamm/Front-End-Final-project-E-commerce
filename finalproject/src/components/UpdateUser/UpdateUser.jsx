import React, {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {UPDATE_USER} from '../../redux/types/userTypes';
import checkError from '../../My-tools/My-tools';
import './UpdateUser.css';

function UpdateUser(props) {

    const [userUpdate, setUser] = useState({
        name: '',
        surname: '',
        phone: '',
        birthday: '',
        address: '',
        country: '',
        city: '',
        postal: ''
    })
    console.log(props.user._id)
    const [message, setMessage] = useState('')

    const handleStateUpdate = (event) => {
        setUser({...userUpdate, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    //---AUTH-----------

    /* let token = props.token
    let auth = {
        headers: {
          'Authorization': `Bearer ${token}` 
        }}; */

    // FUNCTIONS

    const submitUpdate = async () => {
  
        let body = {

            name: userUpdate.name,
            surname: userUpdate.surname,
            phone: userUpdate.phone,
            birthday: userUpdate.birthday,
            address: userUpdate.address,
            country: userUpdate.country,
            city: userUpdate.city,
            postal: userUpdate.postal

        }
        
        let response = await axios.put(`http://localhost:3002/users/${props.user._id}`, body);
        
        if (response) {
            let userUpdated = props.dispatch({type: UPDATE_USER, payload: response.data});
            console.log('userUpdated', userUpdated)
            alert('Datos actualizados con Exito');
        } else {
            alert('Lo siento , no se pudo actualizar el registro, vuelve a intentarlo mas tarde');
        }


    }

    return (
        <div className="update-content">
            <div className="header">
                <h2>Update profile</h2>
            </div>
            <div className="spacer"></div>
            <div className="form-modal">
                <input type='text' name='name' title='Full Name' lenght='30' onChange={handleStateUpdate}></input> 
                <input type='text' name='surname' title='Surname' lenght='30' onChange={handleStateUpdate}></input> 
                <input type='email' name='email' title='Email' lenght='30' onChange={handleStateUpdate}></input> 
                <input type='number' name='phone' title='Phone Number' lenght='12' onChange={handleStateUpdate}></input> 
                <input type='date' name='birthday' title='Date of Birth' lenght='30' onChange={handleStateUpdate}></input> 
                <input type='text' name='address' title='Full Address' lenght='250' onChange={handleStateUpdate}></input>
                <input type='text' name='country' title='Country' lenght='250' onChange={handleStateUpdate}></input> 
                <input type='text' name='city' title='City' lenght='250' onChange={handleStateUpdate}></input>
                <input type='text' name='postal' title='Postal' lenght='250' onChange={handleStateUpdate}></input>
            </div>
            <div className="messageUpdate">{message}</div>
            <div className="submitUpdate">
                <button type='submit' name='submit' onClick={()=>submitUpdate()} title='Update Profile'></button>
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
