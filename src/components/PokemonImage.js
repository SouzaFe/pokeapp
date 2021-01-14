import React, { useState } from 'react';
import './PokemonImage.css';

const PokemonImage = (props) => {
    const [front, setFront] = useState(true);

    return (
        <div id="div-image-pokemon">
            <img id="img-pokemon" src={front ? props.front : props.back} alt={props.alt} />
            <div id="div-switch-image" onClick={() => {setFront(!front)}} title="Alternar imagem"></div>
        </div>
    );
}

export default PokemonImage;