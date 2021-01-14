import React from 'react';
import './NavBar.css';

const NavBar = (props) => {

    return <div className="div-pagination">
        {props.prev &&
            <button onClick={() => props.OnClick(props.prev)}>Voltar</button>
        }
        {props.next &&
            <button id="next" onClick={() => props.OnClick(props.next)}>Avançar</button>
        }
    </div>
}

export default NavBar;