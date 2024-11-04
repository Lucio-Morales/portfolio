import styled from 'styled-components';
import { FaHome, FaUser, FaFolderOpen } from 'react-icons/fa';
import { useState } from 'react';

interface ActiveProp {
  active?: boolean;
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #000;
  color: #fff;
  z-index: 100;
`;

const IconWrapper = styled.a<ActiveProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${(props) => (props.active ? '#fff' : '#aaa')};
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const ActiveIndicator = styled.div<ActiveProp>`
  height: 2px;
  width: 90%;
  background-color: tomato;
  border-radius: 2px;
  margin-top: 6px;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.active ? '1' : '0')};
`;

const MobileNavBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleSetActive = (tab: string) => {
    setActiveTab(tab);
    document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav>
      <IconWrapper
        href="#home"
        active={activeTab === 'home'}
        onClick={() => handleSetActive('home')}
      >
        <FaHome />
        <ActiveIndicator active={activeTab === 'home'} />
      </IconWrapper>
      <IconWrapper
        href="#about"
        active={activeTab === 'about'}
        onClick={() => handleSetActive('about')}
      >
        <FaUser />
        <ActiveIndicator active={activeTab === 'about'} />
      </IconWrapper>
      <IconWrapper
        href="#projects"
        active={activeTab === 'projects'}
        onClick={() => handleSetActive('projects')}
      >
        <FaFolderOpen />
        <ActiveIndicator active={activeTab === 'projects'} />
      </IconWrapper>
    </Nav>
  );
};

export default MobileNavBar;
