import "./Card.css";
import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <div>Conteudo</div>
      <div>{props.titulo}</div>
    </div>
  );
};

export default Card;
