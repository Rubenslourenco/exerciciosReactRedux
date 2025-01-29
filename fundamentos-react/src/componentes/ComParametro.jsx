import React from "react";
export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  const notaInt = Math.ceil(props.nota);
  return (
    <div id="app">
      <h2>{props.titulo}</h2>
      <p>
        {props.aluno} tem nota {notaInt} e esta {status}
      </p>
    </div>
  );
}
