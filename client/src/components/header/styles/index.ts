import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContent = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 25px;
  width: 80%;
  max-width: 220px;
  background-color: #e0e0e0;
  padding: 0.5rem 0;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    width: 60%;
    max-width: 250px;
    padding: 0.5rem 0;
  }

  nav {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: #222;
  border-radius: 50%;
  padding: 0.6rem;

  &:hover {
    background-color: #555;
    color: lightblue;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export { HeaderContent, NavLink };
