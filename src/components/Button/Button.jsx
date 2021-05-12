import React from 'react';
import './Button.css';

import {useHistory} from 'react-router-dom';

const Button = (props) => {
    const {name, path} = props;
    let history = useHistory();

    const bringMeTo = () => {
        history.push(`/${path}`)
    }

    return(
        <div onClick={()=> bringMeTo()} className="buttonRedirect">
            {name}
        </div>
    )
}

export default Button;