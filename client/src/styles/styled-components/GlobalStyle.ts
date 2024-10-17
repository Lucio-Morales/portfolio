import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    line-height: 1.3;
    }

    html, body {
    height: 100%;
    scroll-behavior: smooth;
    }

    body {
    // background-color: #f5f5f5;
    color: #333;
    }  
 
    a {
    text-decoration: none;
    color: inherit;
    }
`;

export default GlobalStyle;
