import React from "react";
export default function ComParametro(params) {
  return (
    <div id="app">
      <h2>{params.titulo}</h2>
      <h3>{params.subtitulo}</h3>
    </div>
  );
}
