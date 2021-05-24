import React , { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from "axios";


import './Admin.css';
import Header from '../../components/Header/Header';

const Admin = (props) => {
    const [users, setUsers] = useState([])
    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDhmYzU1YTYwMDI2MmFkODVjYjJlNmYiLCJ0b2tlbkNyZWF0aW9uRGF0ZSI6IjIwMjEtMDUtMDNUMTE6NDY6MjcuOTIzWiIsImlhdCI6MTYyMDA0MjM4N30.cqslj_Gj_E2dhzV4dFpdUa5GNfrzdwnwiJ1qK6Xuxns"

    const getAllUsers = async () => {
        axios.get('http://localhost:3002/users', {
        headers: {
            'Authorization': `token ${access_token}`
        }
        })
        .then((res) => {
            setUsers(res.data)
        })
    }
               
    useEffect(()=>{
        getAllUsers()
        console.log(users)
    },[])
       

    
    
    
    
    return (
        <div className="content-header-admin-profile">
           <Header/>
         <div className="admins-container">
            <h1 className="admin-title">Nuestros Clientes</h1>
           {users.map(user =>{
               return(
                <div className="admin-container">
                    <p className="admin">{user.name}</p>
                    <p  className="admin">{user.email}</p>
                </div>

               
               )
           })}
           </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token,
    }
} 

export default connect(mapStateToProps)(Admin);