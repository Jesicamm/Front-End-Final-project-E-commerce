import React from 'react';

const Footer = () => {

    return (

        <div className="vistaFooter">
            <div className="header-footer">
                <div className="header-footer-question">Llama al 900 000 000</div>
                <div className="header-footer-question">Whast app: 62222222</div>
                <div className="header-footer-question">lahuertademarian@frute.com</div>  
            </div>
            <div className="links-block">
                <ul className="links-block first-block">
                    <li className="first-block-li">Preguntas frecuentes</li>
                    <li className="first-block-li">Avisos legales</li>
                </ul>
                <ul className="links-block second-block">
                    <li className="second-block-li">Centro de ayuda</li>
                    <li className="second-block-li">Términos de uso</li>
                    <li className="second-block-li">Contáctanos</li>
                </ul>
            </div>
            <div className="link-languages">
                Español
            </div>
        </div>
    )
};

export default Footer;