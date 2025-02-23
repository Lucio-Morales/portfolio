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
  // box-shadow: 0 2px 5px rgba(129, 129, 129, 0.2);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 500px;
    height: 60px;
    border: 2px solid rgb(68, 68, 68);
    border-radius: 50px;
    background-color: rgb(20, 20, 20);
    padding: 10px 20px;
    transition: width 0.3s ease-in-out;
  }

  /* Cambiar la posición de la nav en móviles y agregar margen */
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
