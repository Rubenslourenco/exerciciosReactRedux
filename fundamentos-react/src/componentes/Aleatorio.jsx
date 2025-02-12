import React from "react";

export default function Aleatorio(props) {
  const min = props.min;
  const max = props.max;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2> Valor Aleatorio</h2>
      <p>
        <strong>Valor Minimo: </strong>
        {min}
      </p>
      <p>
        <strong>Valor Maximo: </strong> {max}
      </p>

      <p>
        <strong>Valor escolhido: </strong> {aleatorio}
      </p>
    </div>
  );
}
