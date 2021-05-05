import React from 'react';


import { connect } from 'react-redux';
import Header from '../../components/Header/Header';



const Profile = (props) => {
    
  console.log(props.user.name)

    return (
        <div className='content-header'>
           <Header/>
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