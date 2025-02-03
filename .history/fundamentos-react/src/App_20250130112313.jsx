import "./App.css";
import React from "react";

import Card from "./layout/Card";
import Aleatorio from "./componentes/Aleatorio";
import Primeiro from "./componentes/Primeiro";
import ComParametro from "./componentes/ComParametro";
import Fragmento from "./componentes/Fragmento";

export default function App(props) {
  return (
    <div id="app">
      <h1>Fundamento React </h1>

      <div className="Cards">
        <Card titulo="Desafio Aleatorio" color="#090">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="Fragmento">
          <Fragmento />
        </Card>

        <Card titulo="Com Parâmetro">
          <ComParametro titulo="Situação do aluno " aluno="Pedro" nota={9.9} />
        </Card>

        <Card titulo="Primeiro">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
}
