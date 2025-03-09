// import styled from 'styled-components';
// import StyledButton from './components/StyledButton';

// const Hero = styled.header`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   color: #ffffff;
//   text-align: center;
//   padding: 20px;
//   overflow: hidden;
//   position: relative;

//   h1,
//   p,
//   a {
//     z-index: 1;
//   }

//   h1 {
//     font-size: 6rem;
//     font-weight: 300;
//     letter-spacing: -0.3rem;
//     animation: fadeInDown 1s ease-out;
//     text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
//     margin-bottom: -1rem;
//   }

//   p {
//     margin: 0 0 50px 0;
//     max-width: 650px;
//     color: #b0b0b0;
//     animation: fadeInUp 1s ease-out;
//     text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
//   }

//   .subtitulo {
//     font-size: 1.4rem;
//     font-weight: 400;
//     color: #b0b0b0;
//     opacity: 0;
//     animation: fadeInUp 1.2s ease-out forwards;
//   }

//   @keyframes fadeInDown {
//     0% {
//       opacity: 0;
//       transform: translateY(-30px);
//     }
//     100% {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   @keyframes fadeInUp {
//     0% {
//       opacity: 0;
//       transform: translateY(30px);
//     }
//     100% {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   /* MOBILE STYLES */
//   @media (max-width: 768px) {
//     padding: 20px 10px;

//     h1 {
//       font-size: 4.2rem;
//       margin-bottom: 5px;
//     }

//     p {
//       max-width: 90%;
//       margin-bottom: 30px;
//     }

//     .subtitulo {
//       font-size: 1.3rem;
//     }
//     button {
//       margin-top: 40px;
//     }
//   }
// `;

// const HeroSection = () => {
//   return (
//     <Hero id="home">
//       <h1>Lucio Morales</h1>
//       <p className="subtitulo">Freelance UX UI Designer and Web Developer</p>
//       <a href="#projects">
//         <StyledButton />
//       </a>
//     </Hero>
//   );
// };

// export default HeroSection;
import styled from 'styled-components';
import StyledButton from './components/StyledButton';

const Hero = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  h1,
  p,
  a {
    z-index: 1;
  }

  h1 {
    font-size: 7rem; /* Más grande en desktop */
    font-weight: 200; /* Más delgado */
    letter-spacing: -0.05em;
    background: linear-gradient(90deg, #ffffff, #cccccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 12px rgba(255, 255, 255, 0.15);
    animation: fadeInDown 1s ease-out;
    margin-bottom: 15px;
  }

  p {
    font-size: 2rem; /* Más grande en desktop */
    font-weight: 300;
    color: rgba(255, 255, 255, 0.85);
    max-width: 700px;
    animation: fadeInUp 1.2s ease-out;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
    margin-bottom: 25px;
  }

  .subtitulo {
    font-size: 1.4rem;
    font-weight: 300;
    padding: 10px 25px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.08);
    animation: fadeInUp 1.5s ease-out forwards;
  }

  a {
    margin-top: 30px;
    display: inline-block;
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 🌟 MEJOR VERSIÓN MOBILE 🌟 */
  @media (max-width: 768px) {
    padding: 15px;

    h1 {
      font-size: 4.5rem; /* Más grande que antes */
      font-weight: 200;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.4rem; /* Más legible */
      max-width: 90%;
      margin-bottom: 15px;
    }

    .subtitulo {
      font-size: 1.1rem;
      padding: 8px 20px;
    }

    a {
      margin-top: 25px;
    }
  }
`;

const HeroSection = () => {
  return (
    <Hero id="home">
      <h1>Lucio Morales</h1>
      <p className="subtitulo">Fullstack web developer & UX/UI design</p>
      <a href="#projects">
        <StyledButton />
      </a>
    </Hero>
  );
};

export default HeroSection;
