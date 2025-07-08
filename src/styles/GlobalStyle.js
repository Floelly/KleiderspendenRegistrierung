import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f9fafb;
    color: #1e293b;
  }
`;

export default GlobalStyle;
