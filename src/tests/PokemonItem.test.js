import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PokemonItem from "../components/PokemonItem";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Gerar o snapshot do componente", () => {
    act(() => {
        render(
            <Router>
                <Switch>
                    <PokemonItem name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" toBack="https://pokeapi.co/api/v2/pokemon?limit=20&offset=20" />
                </Switch>
            </Router>, container);
    });
    expect(container.innerHTML).toMatchSnapshot();
});
