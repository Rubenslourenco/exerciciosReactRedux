import React from "react";
export default function ComParametro(props) {
  return (
    <div id="app">
      <h2>{props.titulo}</h2>
      <p>
        {props.aluno} tem nota {props.nota}
      </p>
    </div>
  );
}
