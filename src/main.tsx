import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import StateProvider from "../components/StateProvider"
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body {
    background-color: ${(props) => props.theme.colors.bg};
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    color: white;
  }

`;

const theme = {
  colors: {
    primary: "darkolivegreen",
    secondary: "#0d2118",
    bg: "#062a1a",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);
