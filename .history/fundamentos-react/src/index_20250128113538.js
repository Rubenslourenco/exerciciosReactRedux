import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Primeiro from "./componentes/Primeiro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <strong>React</strong>
  </StrictMode>
);
