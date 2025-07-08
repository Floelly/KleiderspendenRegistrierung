import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f9fafb;
    color: #1e293b;
  }
`;

export default GlobalStyle;
