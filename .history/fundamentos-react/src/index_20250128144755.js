import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Primeiro from "./componentes/Primeiro";
import ComParametro from "./componentes/ComParametro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Primeiro></Primeiro>
    <ComParametro titulo="Situação do aluno " aluno="Pedro" nota={"9.9"} />
  </StrictMode>
);
