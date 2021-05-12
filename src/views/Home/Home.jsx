import React from 'react';

import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useHistory} from 'react-router-dom';


import Cap from '../../Img/fruitshome.jpg'
import FruitBox from '../../Img/fruitBox.jpg'
import Natural from '../../Img/natural.png'
import Ecologic from '../../Img/ecologic.png'
import FreeHome from '../../Img/freeHome.png'




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
                <a class="scrollNavigation" href="" id="second-page">↓</a>
                </div>
            </div>

            <div className="second-page" id="second-page">
                <div className='second-title'>
                <h2>Prueba nuestra FruitBox... Gratis</h2>
                </div>
                <div className='second-page-content'>
                    <div className='fruit-box-content'>
                        <img className="fruit-box" src={FruitBox} alt="fruit-box"/> 
                    </div>
                    <div className='fruit-box-text'>
                        <ul className='text-list'>
                            <li className='text-list-li'>Prueba nuestra cesta de Bienvenida GRATIS con tu primer pedido</li>
                            <li className='text-list-li'>Haz tu pedido superior a 21E y recibe con el esta cesta valorada en 30E</li>
                            <li className='text-list-li'>Ideal para 2 personas</li>
                            <li className='text-list-li'>Fruta y verdura ECOLÓGICA</li>
                            <li className='text-list-li'>De nuestras socias y amigas de FRUITBOX, que nos traen sólo las mejores calidades</li>
                            <li className='text-list-li'>Muy Pronto disponibles también en nuestro catálogo!!!!</li>
                        </ul>

                    </div>


                </div>
              
            </div>

            <div className="third-page">
                <div>
                <h2 className='third-title'>¿Por qué comprar en La Huerta de Marian?</h2>
                </div>
                <div className='third-content-eco-ima'>
                    <div className='individual-eco-content'>
                        <img className="eco-fruit" src={Natural} alt="Productos naturales"/> 
                        <div className='eco-text'>
                            <h4>FRUTAS Y VERDURAS FRESCAS</h4>
                            <p>Seleccionamos las mejores frutas y verduras ecológicas<br/>  y de cultivo tradicional que nos brinda nuestro huerto.</p>
                        </div>
                    </div>
                    <div className='individual-eco-content'>
                        <img className="eco-fruit" src={Ecologic} alt="Productos Ecologicos"/>   
                        <div className='eco-text'>
                            <h4>CERTIFICADO ECOLÓGICO</h4>
                            <p>Cultivamos de manera natural y sostenible y<br/> recolectamos a diario para tener el producto más fresco.</p>
                        </div>
                    </div>
                    <div className='individual-eco-content'>
                        <img className="eco-fruit" src={FreeHome} alt="Envio gratis"/>
                        <div className='eco-text'>
                            <h4>ENVÍO GRATUITO</h4>
                            <p>Enviamos gratuitamente nuestros productos a tu casa y <br/>en transporte regfrigerado para que no pierdan sus propiedades</p>
                        </div>
                    </div>
                </div>
            </div>
         
            <Footer/>
        </div>
    )
};

export default Home;