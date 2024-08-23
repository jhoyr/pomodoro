import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from "styled-components"; //Utilizados para aplicar estilos globais e temas personalizados com styled-components.
import StateProvider from './components/StateProvider'; //Contexto global que armazena e fornece o estado para a aplicação inteira.

/**
 * Define estilos globais como `margin`, `padding`, `fonr-size`, e a cor de fundo da aplicação
 */
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body {
    background-color: ${props => props.theme.colors.bg};
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: white;
  }

`;

const theme = {
  colors: {
    primary: "#b85600",
    secondary: "#08002b",
    bg: "#220045",
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * Renderiza o componente `App` dentro do elemento HTML com `id="root"`, 
 *  envolto por `StateProvider` e `ThemeProvider`
 **/ 
root.render(
  <React.StrictMode>
    <StateProvider>
      {/**
       * Envolve a aplicação inteira e fornece um tema que pode ser acessado por todos os componentes estilizados.
       */}
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);