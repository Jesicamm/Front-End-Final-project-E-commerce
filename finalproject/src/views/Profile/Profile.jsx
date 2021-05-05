import React from 'react';
import { connect } from 'react-redux';

import './Profile.css';
import Header from '../../components/Header/Header';
import UpdateUser from '../../components/UpdateUser/UpdateUser';



const Profile = (props) => {
    
  

    return (
        <div className="content-header">
           <Header/>
            <div className="update-user">
                <UpdateUser/>
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