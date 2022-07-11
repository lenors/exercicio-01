import React, { Component } from "react";

export default class App extends Component {
  state = {
    nome: "leno",
    idade: 25,
    comida: "Bife",
    musicas: ["Rock ", "eletronica", "hip-hop "],
  };
  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <ul>
          <li>{this.state.musicas[1]}</li>
        </ul>
      </div>
    );
  }
}
