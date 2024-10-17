import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2.2rem;
  background-color: #e0e0e0;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 2rem;
      margin-bottom: 0;
      width: 280px;
      height: 280px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #666;

    @media (min-width: 768px) {
      font-size: 1.8rem; /* Tamaño mayor en pantallas grandes */
    }
  }

  p {
    text-align: center;
    margin-bottom: 1.1rem;
    font-size: 1.2rem;
    max-width: 600px;
    line-height: 1.5;

    span {
      font-weight: bold;
      color: #333;
      background-color: #fdd835;
      padding: 0.2rem 0.4rem;
      border-radius: 5px;

      @media (min-width: 768px) {
        font-size: 1.4rem; /* Tamaño mayor para el span */
      }
    }

    @media (min-width: 768px) {
      text-align: left;
      font-size: 1.5rem;
    }
  }

  button {
    padding: 0.75rem 1.75rem;
    background: linear-gradient(135deg, #333, #444); /* Degradado sutil */
    color: white;
    text-decoration: none;
    border-radius: 12px; /* Bordes más redondeados */
    transition: background-color 0.3s, transform 0.2s ease, box-shadow 0.2s ease;
    font-size: 1.1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */

    &:hover {
      cursor: pointer;
      background-color: #555; /* Mayor contraste en hover */
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Aumenta la sombra en hover */
      transform: translateY(-3px); /* Efecto de elevación */
    }

    &:active {
      transform: translateY(1px); /* Efecto de clic */
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); /* Reducir sombra al hacer clic */
    }
  }
`;

// const HeroContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 100vh;
//   padding: 2.2rem;
//   background-color: #f0f0f0;

//   img {
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     object-fit: cover;
//     margin-bottom: 1rem;
//   }

//   h1 {
//     font-size: 1.8rem;
//     margin-bottom: 0.5rem;
//   }

//   h2 {
//     font-size: 1.2rem;
//     margin-bottom: 1rem;
//     color: #666;
//   }

//   p {
//     text-align: center;
//     margin-bottom: 2rem;
//     font-size: 1.2rem;
//     max-width: 500px; /* Limita el ancho del párrafo */
//     line-height: 1.5;

//     span {
//       font-weight: bold;
//       color: #333;
//       background-color: #fdd835;
//       padding: 0.2rem 0.4rem;
//       border-radius: 5px;
//     }
//   }

//   button {
//     padding: 0.75rem 1.5rem;
//     background-color: #333;
//     color: white;
//     text-decoration: none;
//     border-radius: 5px;
//     transition: background-color 0.3s;

//     &:hover {
//       cursor: pointer;
//       background-color: #555;
//     }
//   }
// `;

export { HeroContainer, Content };
