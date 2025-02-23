// import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
//     * {

// box-sizing: border-box;
// margin:0;
// padding:0;
// }

// html {
// background-color: #050505;
// scroll-behavior: smooth;
// }

// html,body
//     {
//         height: 100%;
//     }

//   body {
//     font-family: 'Inter Tight',  sans-serif;
//     line-height: 1.6;
//     font-size: 16px;
//     color: #333;
//   }

//   #root {
//     height: 100%;
//   }

//   a {
//     text-decoration: none;
//   }

// `;

// export default GlobalStyles;
//////////////////////////////////////////////////////////////////
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
//     * {
//         box-sizing: border-box;
//         margin: 0;
//         padding: 0;
//     }

//     html {
//         background-color:rgb(7, 7, 7);
//         scroll-behavior: smooth;
//     }

//     html, body {
//         height: 100%;
//     }

//     body {
//         font-family: 'Inter Tight', sans-serif;
//         line-height: 1.6;
//         font-size: 16px;
//         color: #333;
//         position: relative;
//         min-height: 100vh;
//         overflow-x: hidden; /* Solo oculta el scroll horizontal, pero permite vertical */
//     }

//     #root {
//         min-height: 100vh; /* Asegura que el contenido pueda expandirse */
//     }

//     a {
//         text-decoration: none;
//     }

//     /* Fondo con gradientes */
//     body::before {
//         content: "";
//         position: fixed;
//         inset: 0;
//         background: radial-gradient(circle 800px at 50% -100%, #1a1a1a, transparent);
//         z-index: -1;
//     }

//     body::after {
//         content: "";
//         position: fixed;
//         inset: 0;
//         background-image:
//             linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
//         background-size: 36px 36px;
//         z-index: -1;
//     }
// `;

// export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        background-color: #050505;
        scroll-behavior: smooth;
    }

    html, body {
        height: 100%;
    }

    body {
        font-family: 'Inter Tight', sans-serif;
        line-height: 1.6;
        font-size: 16px;
        color: #333;
        position: relative;
        min-height: 100vh;
        overflow-x: hidden; /* Solo oculta el scroll horizontal */
        overflow-y: auto; /* Permitir el scroll vertical */
    }

    #root {
        min-height: 100vh; /* Asegura que el contenido pueda expandirse */
    }

    a {
        text-decoration: none;
    }

    /* Fondo con gradientes */
    body::before {
        content: "";
        position: fixed;
        inset: 0;
        background: radial-gradient(circle 800px at 50% -100%, #1a1a1a, transparent);
        z-index: -1;
    }

    body::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 32px 32px;
        z-index: -1;
    }

    /* Estilos para la barra de desplazamiento */
    ::-webkit-scrollbar {
        width: 14px; /* Ancho de la barra de desplazamiento */
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1); /* Fondo de la pista */
    }

    ::-webkit-scrollbar-thumb {
        background:rgb(90, 90, 90); /* Color del pulgar */
        border-radius: 6px; /* Bordes redondeados */
    }

    ::-webkit-scrollbar-thumb:hover {
        background:rgb(75, 75, 75); /* Color del pulgar al pasar el mouse */
    }
`;

export default GlobalStyles;
