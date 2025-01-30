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
      <Card titulo="Exemplo de Card" />
      <Aleatorio min={1} max={60} />
      <Fragmento />
      <ComParametro titulo="Situação do aluno " aluno="Pedro" nota={9.9} />
      <Primeiro></Primeiro>
    </div>
  );
}
