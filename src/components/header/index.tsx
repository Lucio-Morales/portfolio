import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1) 12%);
  color: #ffffff;
  text-align: center;
  padding: 20px;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 1) 12%
    );
  }

  h1,
  p,
  a {
    z-index: 1;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: fadeInDown 1s ease-out;
  }

  p {
    margin: 15px 0;
    line-height: 1.6;
    font-size: 1.8rem;
    max-width: 600px;
    animation: fadeInUp 1s ease-out;
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ShadowOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 320px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.05),
    rgba(0, 0, 0, 0.8)
  );
  transform: translate(-50%, -50%);
  z-index: 0;
  border: 1px solid silver;
  animation: rotateClockwise 40s infinite linear;

  @keyframes rotateClockwise {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
const ShadowOverlayReverse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.05),
    rgba(0, 0, 0, 0.8)
  );
  transform: translate(-50%, -50%);
  z-index: 0;
  border: 1px solid tomato;
  animation: rotateCounterClockwise 40s infinite linear;

  @keyframes rotateCounterClockwise {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg); /* Rotación en dirección contraria */
    }
  }
`;
const Button = styled.a`
  margin-top: 30px;
  padding: 12px 24px;
  background-color: #000000;
  color: #ffffff;
  text-decoration: none;
  border: 2px solid #ffffff;
  box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background-color: #333333;
  }

  @media (hover: none) {
    &:hover {
      background-color: #000000;
    }
  }
`;
const HeaderSection = () => {
  return (
    <Header id="home">
      <ShadowOverlay />
      <ShadowOverlayReverse />
      <h1>Hi! I'm Lucio</h1>
      <p>A software developer from Argentina</p>
      <Button href="#projects">Projects</Button>
    </Header>
  );
};

export default HeaderSection;
