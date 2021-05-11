import React, { useState } from 'react';
import { connect } from 'react-redux';
import Orange from '../../Img/orange.png'

import './Profile.css';
import Header from '../../components/Header/Header';
import UpdateUser from '../../components/UpdateUser/UpdateUser';





const Profile = (props) => {
    
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="content-header-user-profile">
           <Header/>
           <div>
           <div className='user-container'>
               <div className="user-img-container">
                    <div className="user-img-radius">
                        <img className="image-profile-user" src={Orange} alt="whatsapp"/>
                    </div>
                    <div>
                    <p>Bienvenid@ {props.user.name}</p>
                    </div>
                    </div>
                    <div className="data-update-container">
            {!showModal ?
               <div className="data-user-container">
                <h3>Mis Datos</h3>
                <p>Nombre: {props.user.name}</p>
                <p>Apellidos: {props.user.surname}</p>
                <p>Email: {props.user.email}</p>
                <p>Teléfono de contacto: {props.user.phone}</p>
                <p>Fecha de nacimiento: {props.user.birthday}</p>
                <p>Dirección: {props.user.address}</p>
                <p>País: {props.user.country}</p>
                <p>Ciudad : {props.user.city}</p>
                <p>Código Postal : {props.user.postal}</p>
               </div>
               :
                <UpdateUser/>}
                <button className="update-btn"onClick={() => setShowModal(!showModal)}>{showModal?"Mis Datos" : "Actualizar mis datos"}</button> 
                </div>
               
            </div>
              
           </div>
         
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token,
        productCart: state.productCart
    }
} 

export default connect(mapStateToProps)(Profile);