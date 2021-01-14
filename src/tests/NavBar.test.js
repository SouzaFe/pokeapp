import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import NavBar from "../components/NavBar";

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

it("Somente com botão de Avançar", () => {
    act(() => {
        render(<NavBar next="http://" />, container);
    });
    expect(container.querySelector("button#next").textContent).toBe("Avançar");
});

it("Somente com botão de Voltar", () => {
    act(() => {
        render(<NavBar prev="http://" />, container);
    });
    expect(container.querySelector("button:not(#next)").textContent).toBe("Voltar");
});

it("Com ambos os botões", () => {
    act(() => {
        render(<NavBar next="http://" prev="http://" />, container);
    });
    expect(container.querySelector("button#next").textContent).toBe("Avançar");
    expect(container.querySelector("button:not(#next)").textContent).toBe("Voltar");
});

it("Sem os botões", () => {
    act(() => {
        render(<NavBar />, container);
    });
    expect(container.querySelector("button#next")).toBeNull();
    expect(container.querySelector("button:not(#next)")).toBeNull();
});
