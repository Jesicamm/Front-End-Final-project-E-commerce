import React, {useState} from 'react';

import axios from 'axios';
import {connect} from 'react-redux';
import {UPDATE_USER} from '../../redux/types/userTypes';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Modal = (props) => {

    const [userUpdate, setUser] = useState(props.user);

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

        
        let response = await axios.put(`http://localhost:3002/users/${props.user._id}`, userUpdate);
        
        if (response) {
            let userUpdated = props.dispatch({type: UPDATE_USER, payload: userUpdate});
            console.log('userUpdated', userUpdated)
            alert('Datos actualizados con Exito');
        } else {
            alert('Lo siento , no se pudo actualizar el registro, vuelve a intentarlo mas tarde');
        }
    }
    const [open, setOpen] = useState(false);


  openModal=()=>{
    setOpen(!open)
  }


    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <>
      <div className="principal">
        <div className="secundario">
      <Button color="success" onClick={openModal}>Mostrar Modal</Button>

      </div></div>

      <Modal isOpen={open} style={modalStyles}>
        <ModalHeader>
          Actualizar mis datos
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="usuario">Usuario</Label>
            <Input type="text" id="usuario"onChange={handleStateUpdate}/> 
          </FormGroup>
          <FormGroup>
            <Label for="password">Contraseña</Label>
            <Input type="text" id="password"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary" onClick={()=>submitUpdate()}>Actualizar mis datos</Button>
            <Button color="secondary" onClick={openModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  
}

const mapStateToProps =state =>{
    return{
      user : state.user,
      token : state.token
    }
  };

export default connect(mapStateToProps)(Modal);
