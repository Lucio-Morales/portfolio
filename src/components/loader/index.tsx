import styled, { keyframes } from 'styled-components';

// Animación del spinner
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Contenedor del spinner
const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

// Estilos del spinner
const Spinner = styled.div`
  border: 8px solid rgba(243, 243, 243, 0.5);
  border-top: 8px solid rgb(78, 238, 63); /* Verde */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.7s linear infinite;
`;

const Loader = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
);

export default Loader;
