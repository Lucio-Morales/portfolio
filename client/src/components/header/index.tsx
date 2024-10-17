import { FaHome, FaProjectDiagram, FaInfoCircle } from 'react-icons/fa';
import { HeaderContent, NavLink } from './styles';

const Header = () => {
  return (
    <HeaderContent>
      <nav>
        <NavLink to="/home">
          <FaHome />
        </NavLink>
        <NavLink to="/projects">
          <FaProjectDiagram />
        </NavLink>
        <NavLink to="/about">
          <FaInfoCircle />
        </NavLink>
      </nav>
    </HeaderContent>
  );
};

export default Header;
