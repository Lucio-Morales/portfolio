import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {

box-sizing: border-box;
margin:0;
padding:0;
}

html {
background-color: #050505;
scroll-behavior: smooth;
}

html,body 
    {
        height: 100%;
    }

  body {
    font-family:  sans-serif; 
    line-height: 1.6; 
    font-size: 16px; 
    color: #333; 
  }

  #root {
    height: 100%;
  }
 
  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
