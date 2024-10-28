// import styled from 'styled-components';
// import { FaHome, FaUser, FaFolderOpen } from 'react-icons/fa';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 60px;
//   background-color: #000000;
//   color: white;
//   z-index: 10000;

//   a {
//     padding: 10px 15px;
//     color: white;
//     text-decoration: none;
//     font-size: 1.7rem;
//     transition: color 0.3s ease, transform 0.3s ease;

//     &:hover {
//       transform: scale(1.2); /* Animación al hacer hover */
//     }
//   }
// `;

import styled from 'styled-components';
import { FaHome, FaUser, FaFolderOpen } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 8px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%; /* Ancho en pantallas pequeñas */
  height: 60px;
  background-color: #1a1a1a;
  border: 1px solid #4d4d4d;
  border-radius: 30px;
  color: white;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  a {
    padding: 0 15px;
    color: white;
    text-decoration: none;
    font-size: 1.8rem;
    line-height: 60px;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: silver;
      transform: scale(1.2);
    }
  }

  /* tablets */
  @media (min-width: 768px) {
    width: 50%; /* Menos ancha en pantallas medianas */
    height: 50px; /* Reduce la altura */
    border-radius: 25px;

    a {
      font-size: 2rem;
      line-height: 50px;
    }
  }

  /* escritorio */
  @media (min-width: 1024px) {
    width: 30%;
    height: 50px;
    border-radius: 20px;

    a {
      font-size: 1.7rem;
      line-height: 45px;
    }
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <a href="#home">
        <FaHome />
      </a>
      <a href="#about">
        <FaUser />
      </a>
      <a href="#projects">
        <FaFolderOpen />
      </a>
    </Nav>
  );
};

export default NavBar;
