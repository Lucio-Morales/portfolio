import styled from 'styled-components';

const Card = styled.div`
  background: silver;
  width: 90%;
  max-width: 600px;
  height: auto;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente */
  text-align: center; /* Centra el texto */
  flex: 1; /* Permite que este contenedor ocupe el espacio disponible */
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 8px; /* Bordes redondeados para la imagen */
`;

const ProjectDescription = styled.p`
  margin: 15px 0; /* Espaciado entre la imagen y el texto */
  font-size: 1rem; /* Tamaño de fuente adecuado */
  color: #333; /* Color del texto */
  padding: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Espaciado entre botones */
  width: 100%; /* Ancho completo para los botones */
  margin-top: auto; /* Asegura que esté al fondo */

  button {
    color: white;
    padding: 10px 20px; /* Espaciado interno */
    border-radius: 5px; /* Bordes redondeados */
    text-decoration: none; /* Sin subrayado */
    text-align: center;
    flex: 1; /* Hace que los botones ocupen espacio igual */
    margin: 0 5px; /* Espaciado entre los botones */

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }

    &.live {
      background: #28a745; /* Color de fondo para el botón "Ver en vivo" */
    }

    &.github {
      background: #333; /* Color de fondo para el botón "Ver en GitHub" */
    }
  }
`;

export {
  Card,
  ProjectContainer,
  ProjectImage,
  ProjectDescription,
  ButtonContainer,
};
