import React from 'react';
import './Button.css';

import {useHistory} from 'react-router-dom';

const Button = (props) => {

    let history = useHistory();

    const bringMeTo = () => {
        history.push(`/${props.path}`)
    }

    return(
        <div onClick={()=> bringMeTo()} className="buttonRedirect">
            {props.name}
        </div>
    )
}

export default Button;