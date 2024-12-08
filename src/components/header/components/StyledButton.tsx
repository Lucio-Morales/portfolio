import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const expandCircle = keyframes`
  0% {
    width: 20px;
    height: 20px;
    opacity: 0;
  }
  100% {
    width: 220px;
    height: 220px;
    opacity: 1;
  }
`;

const hoverArrow1 = keyframes`
  0% { left: -25%; }
  100% { left: 16px; }
`;

const hoverArrow2 = keyframes`
  0% { right: 16px; }
  100% { right: -25%; }
`;

const ButtonContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 36px;
  border: 4px solid transparent;
  font-size: 16px;
  background-color: inherit;
  border-radius: 100px;
  font-weight: 500;
  color: greenyellow;
  box-shadow: 0 0 0 2px greenyellow;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 0 4px greenyellow;
  }
`;

const Text = styled.span`
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  ${ButtonContainer}:hover & {
    transform: translateX(12px);
  }
`;

const Circle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: greenyellow;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  ${ButtonContainer}:hover & {
    animation: ${expandCircle} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
`;

const Icon = styled.svg<{ position: 'left' | 'right' }>`
  position: absolute;
  width: 24px;
  fill: greenyellow;
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  ${({ position }) =>
    position === 'left'
      ? css`
          left: -25%;
          ${ButtonContainer}:hover & {
            animation: ${hoverArrow1} 0.8s cubic-bezier(0.23, 1, 0.32, 1)
              forwards;
            fill: #212121;
          }
        `
      : css`
          right: 16px;
          ${ButtonContainer}:hover & {
            animation: ${hoverArrow2} 0.8s cubic-bezier(0.23, 1, 0.32, 1)
              forwards;
            fill: #212121;
          }
        `}
`;

// Componente principal
const StyledButton: React.FC = () => {
  return (
    <ButtonContainer>
      <Icon
        position="left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </Icon>
      <Text>Projects</Text>
      <Circle />
      <Icon
        position="right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </Icon>
    </ButtonContainer>
  );
};

export default StyledButton;
