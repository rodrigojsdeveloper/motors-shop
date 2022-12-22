import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyled from "./styles/gobal";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
);
