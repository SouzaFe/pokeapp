import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './PokemonDetail.css';
import Loading from './Loading';
import Header from './Header';
import NavBar from './NavBar';
import PokemonImage from './PokemonImage';

const PokemonDetail = (props) => {
    const { name } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
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
    }, [url]);

    let component;
    if (!loaded) {
        component = <Loading />
    } else {
        component =
            <div className="div-pokemon-detail">
                <div className="div-details">
                    <div className="div-details-contents">
                        <PokemonImage alt={data.name} front={data.sprites.front_default} back={data.sprites.back_default} />
                    </div>
                    <div className="div-details-contents">
                        <h1>{data.name}</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Altura</th><td>{data.height * 10} cm</td>
                                </tr>
                                <tr>
                                    <th>Peso</th><td>{data.weight / 10} kg</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Status Base</th>
                                </tr>
                                <tr>
                                    <td>
                                        {data.stats.map(status => {
                                            return <div key={status.stat.name}>{status.stat.name}: {status.base_stat}</div>
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Habilidades</th>
                                </tr>
                                <tr>
                                    <td>
                                        {data.abilities.map(ability => {
                                            return <div key={ability.ability.name}>{ability.ability.name}</div>
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Tipos</th>
                                </tr>
                                <tr>
                                    <td>
                                        {data.types.map(type => {
                                            return <div key={type.type.name}>{type.type.name}</div>
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <NavBar prev={data.name} OnClick={() => { props.history.push({pathname: '/', state: { toBack: props.location.state.toBack }}); }} />
            </div>
    }
    return <>
        <Header />
        <div className="div-container">
            {component}
        </div>
    </>
}

export default PokemonDetail;