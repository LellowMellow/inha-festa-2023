import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./routes/Routes";
import theme from "./assets/theme/Theme";
import ModalsProvider from "./assets/ModalsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <ModalsProvider>
      <GlobalStyle />
      <Router />
    </ModalsProvider>
  </ThemeProvider>
);
