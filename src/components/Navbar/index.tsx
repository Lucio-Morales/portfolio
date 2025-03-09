import styled from 'styled-components';

const NavBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 20px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 500px;
    height: 60px;
    border: 2px solid rgba(255, 255, 255, 0.2); /* Borde sutil */
    border-radius: 50px;
    background: rgba(41, 41, 41, 0.1); /* Fondo semitransparente */
    backdrop-filter: blur(10px); /* Efecto borroso */
    -webkit-backdrop-filter: blur(10px); /* Compatibilidad Safari */
    padding: 10px 20px;
    transition: width 0.3s ease-in-out;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra suave */
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 2px;
  }
`;

const Navbar = () => {
  return (
    <NavBox>
      <nav></nav>
    </NavBox>
  );
};

export default Navbar;
