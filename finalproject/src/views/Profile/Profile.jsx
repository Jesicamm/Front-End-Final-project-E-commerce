import React from 'react';
import { connect } from 'react-redux';

import './Profile.css';
import Header from '../../components/Header/Header';
import UpdateUser from '../../components/UpdateUser/UpdateUser';
import { Modal } from 'bootstrap';



const Profile = (props) => {
    

    return (
        <div className="content-header-user-profile">
           <Header/>
           <div className="data-user-container">
            {/*    <h3>Mis Datos</h3>
               <p>Nombre: {props.user.name}</p>
               <p>Apellidos: {props.user.surname}</p>
               <p>Email: {props.user.email}</p>
               <p>Teléfono de contacto: {props.user.phone}</p>
               <p>Fecha de nacimiento: {props.user.birthday}</p>
               <p>Dirección: {props.user.adress}</p>
               <p>País: {props.user.country}</p>
               <p>Ciudad : {props.user.city}</p>
               <p>Código Postal : {props.user.postal}</p>
               <button className="update-btn">Actualizar mis datos</button> */}
               <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-danger">Nombre: {props.user.name}</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
           </div>
           <div className="order-user-container">
               <h3>Mis Pedidos</h3>
           </div>
            <div className="update-user">
                <Modal/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
} 

export default connect(mapStateToProps)(Profile);