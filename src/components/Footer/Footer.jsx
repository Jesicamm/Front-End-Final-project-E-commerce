import React from 'react';
import './Footer.css';
import Gmail from '../../Img/gmail.png'
import Whats from '../../Img/whatsapp.png'
import Call from '../../Img/call.png'

const Footer = () => {

    return (

        <div className="vistaFooter">
            <div className="header-footer">
                <div className="header-footer-contact">
                 <img className="image-contact" src={Call} alt="llamada"/> 
                 <p>900 000 000</p>
                </div>
                <div className="header-footer-contact">
                    <img className="image-contact" src={Whats} alt="whatsapp"/> 
                    <p>622222222</p>
                </div>
                <div className="header-footer-contact">
                    <img className="image-contact" src={Gmail} alt="gmail"/> 
                    <p>lahuertademarian@frute.com</p>
                </div>  
            </div>
            <div className="links-block">
                    <p className="first-block-li">Preguntas frecuentes</p>
                    <p className="first-block-li">Avisos legales</p>
            </div>
            <div className="links-block">
                
                    <p className="second-block-li">Centro de ayuda</p>
                    <p className="second-block-li">Términos de uso</p>
                    <p className="second-block-li">Contáctanos</p>
                
            </div>
            <div className="links-block">
                <p>Español</p>
                <p>Inglés</p>
            </div>
        </div>
    )
};

export default Footer;