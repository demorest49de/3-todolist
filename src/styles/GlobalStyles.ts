import {createGlobalStyle} from "styled-components";
import theme from "./Theme.Styled";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    //  esli nuzhno posmotret kakoy block vilazit na adaptive

    //outline: 1px solid indianred;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Ubuntu Condensed', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    min-width: 320px;
    min-height: 100vh;
    background-color: ${theme.backgroundColor.primary};
    color: ${theme.colors.white};
  }

  input, textarea {
    color: black;
  }

  picture {
    width: 100%;
    height: auto;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  img, label {
    user-select: none;
  }

  button {
    cursor: pointer;
    padding: 10px;
    background-color: unset;
    border: 1px solid indianred;
    border-radius: 10px;
    color: ${theme.colors.white}
    
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul, ol, h1, h2, h3, h4, p, figure, fieldset, blockquote {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    padding: 0;
    list-style: none;
  }

  li a {
    display: block;
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }

  address {
    font-style: unset;
  }
`