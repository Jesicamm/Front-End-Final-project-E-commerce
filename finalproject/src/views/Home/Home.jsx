import React from 'react';

import './Home.css';
import Header from '../../components/Header/Header';


import Cap from '../../Img/fruitshome.jpg'




const Home = () => {
    return (
        <div id='content-home'>
            <Header/>
            <div className="first-img">
                <img className="image-cap" src={Cap} alt="image-cap"/> 
            </div>
        </div>
    )
};

export default Home;