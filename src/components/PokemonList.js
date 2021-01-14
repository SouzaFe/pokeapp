import React, { useState, useEffect } from 'react';
import './PokemonList.css';
import Loading from './Loading';
import PokemonItem from './PokemonItem';
import NavBar from './NavBar';
import Header from './Header';

const PokemonList = (props) => {
    const [url, setUrl] = useState(!props.location.state ? 'https://pokeapi.co/api/v2/pokemon/' : props.location.state.toBack);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoaded(true);
        }
        fetchData();
        props.history.replace('', null);
    }, [url]);

    let component;
    if (!loaded) {
        component = <Loading />
    } else {
        component = <>
            <ul>{
                data.results.map(pokemon => {
                    return <PokemonItem key={pokemon.name} name={pokemon.name} url={pokemon.url} toBack={url} />
                })
            }</ul>
            <NavBar prev={data.previous} next={data.next} OnClick={(url) => { setLoaded(false); setUrl(url); }} />
        </>
    }
    return <>
        <Header />
        <div className="div-container">
            {component}
        </div>
    </>
}

export default PokemonList;