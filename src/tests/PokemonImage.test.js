import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PokemonImage from "../components/PokemonImage";

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

it("Funcionamento da alternancia de imagem", () => {
    act(() => {
        render(<PokemonImage front="imageFront.png" back="imageBack.png" />, container);
    });
    expect(container.querySelector("#img-pokemon").src).toContain("imageFront.png");

    const button = container.querySelector("#div-switch-image");
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container.querySelector("#img-pokemon").src).toContain("imageBack.png");
});
