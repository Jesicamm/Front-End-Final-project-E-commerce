import React from 'react';

import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useHistory} from 'react-router-dom';

import Cap from '../../Img/fruitshome.jpg'




const Home = () => {
    let history = useHistory();
    return (
        <div id='content-home'>
            <Header/>
            <div className="first-img">
                <img className="image-cap" src={Cap} alt="image-cap"/> 
                <div className="title">LA HUERTA DE MARIAN</div>
                <div className="text-cap"><p>Acercándote la huerta a casa desde 1992</p>
                <p>AHORA + FÁCIL</p>
                <button className="buy-button"onClick={()=> history.push('/tienda')}>Haz tu pedido</button>
                </div>
                <div className="offers"><p>Descubre nuestras ofertas y productos</p>
                <a class="scrollNavigation" href="">↓</a>
                </div>
            </div>

            <div className="second-page" id="second-page">
                <p>DESCUBRE LA OFERTA DE PRODUCTOS DE NUESTRA FRUTERÍA</p>
               {/*  <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}
            </div>

            <div className="third-page">
                <p>¿Por qué comprar en La Huerta de Marian?</p>
            </div>
            <Footer/>
        </div>
    )
};

export default Home;