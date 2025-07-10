import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.fontSizes.body};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: 700;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: 600;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    display:inline-block;
    color: ${({theme}) => theme.colors.primary};
    transition: opacity .3s ease, transform .3s ease;
  }
  a:hover {
    opacity: .7;
    transform: scale(1.05);
  }
`;

export default GlobalStyle;
