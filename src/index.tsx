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
//FMCG 업계에서 약 5년의 경력을 가지고 있습니다. 주도적으로 