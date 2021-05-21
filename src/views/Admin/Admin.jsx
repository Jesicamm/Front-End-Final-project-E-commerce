import React , { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from "axios";


import './Admin.css';
import Header from '../../components/Header/Header';

const Admin = (props) => {
    

      const getAllUsers = async () => {
          let response = setTimeout(async () => {
            let responseUser = await axios.get('http://localhost:3002/users');
            console.log(responseUser)
        }, 1000)
       
    
       

    }
    
    getAllUsers()
    
    return (
        <div className="content-header-admin-profile">
           <Header/>
         <div className='client-container'>TODOS MIS CLIENTES</div>  
           
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

export default connect(mapStateToProps)(Admin);