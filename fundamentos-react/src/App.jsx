import React from "react";

import Primeiro from "./componentes/Primeiro";
import ComParametro from "./componentes/ComParametro";
import Fragmento from "./componentes/Fragmento";

export default function App(props) {
  return (
    <div id="app">
      <h1>Fundamento React </h1>
      <Fragmento />
      <ComParametro titulo="Situação do aluno " aluno="Pedro" nota={9.9} />
      <Primeiro></Primeiro>
    </div>
  );
}
