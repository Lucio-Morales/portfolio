import styled from 'styled-components';
import StyledButton from './components/StyledButton';

const Hero = styled.header`
  // background-color: #050505;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  overflow: hidden;
  position: relative;
  font-family: 'Inter Tight', sans-serif;

  h1,
  p,
  a {
    z-index: 1;
  }

  h1 {
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: -0.3rem;
    animation: fadeInDown 1s ease-out;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    margin-bottom: -1rem;
  }

  p {
    margin: 0 0 50px 0;
    max-width: 650px;
    color: #b0b0b0;
    animation: fadeInUp 1s ease-out;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
  }

  .subtitulo {
    font-size: 1.4rem;
    font-weight: 400;
    color: #b0b0b0;
    opacity: 0;
    animation: fadeInUp 1.2s ease-out forwards;
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

  /* MOBILE STYLES */
  @media (max-width: 768px) {
    padding: 20px 10px;

    h1 {
      font-size: 4.2rem;
      margin-bottom: 5px;
    }

    p {
      max-width: 90%;
      margin-bottom: 30px;
    }

    .subtitulo {
      font-size: 1.3rem;
    }
    button {
      margin-top: 40px; /* Mayor espacio entre el subtítulo y el botón en móviles */
    }
  }
`;

const HeroSection = () => {
  return (
    <Hero id="home">
      <h1>Lucio Morales</h1>
      <p className="subtitulo">Freelance UX UI Designer and Web Developer</p>
      <a href="#projects">
        <StyledButton />
      </a>
    </Hero>
  );
};

export default HeroSection;
