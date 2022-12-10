import React from 'react';
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');
// const root = ReactDOM.createRoot(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);