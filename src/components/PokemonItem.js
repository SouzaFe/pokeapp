import React from 'react';
import './PokemonItem.css';
import { Link } from "react-router-dom";

const PokemonItem = (props) => {
    let url = props.url.replace(/\/$/, "");
    url = url.substr(url.lastIndexOf("/") + 1);
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`;

    return (
        <li className="div-item-list">
            <Link to={{ pathname: `/Pokemon/${props.name}`, state: { toBack: props.toBack } }}>
                <img alt={props.name} src={urlImage} />
                <p>
                    {props.name}
                </p>
            </Link>
        </li>);
}

export default PokemonItem;