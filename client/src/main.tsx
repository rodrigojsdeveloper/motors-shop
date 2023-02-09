import { BrowserRouter } from "react-router-dom";
import GlobalStyled from "./styles/gobal";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";
import { ScrollToTop } from "./utils/scrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
