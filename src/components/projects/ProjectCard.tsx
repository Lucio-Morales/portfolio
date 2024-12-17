import styled from 'styled-components';

const ProjectCard = styled.div`
  background-color: #f8f8f8; /* Gris claro */
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transform: translateY(50px);
  opacity: 0;
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  &:hover {
    transform: translateY(0);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  &:hover .project-image {
    transform: scale(1.05);
  }

  /* Animación de entrada */
  &.in-view {
    transform: translateY(0);
    opacity: 1;
  }

  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease-out;
  }

  .project-info {
    padding: 20px;
    text-align: center;
  }

  .project-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #060215; /* Negro opaco */
    margin-bottom: 10px;
  }

  .project-description {
    font-size: 1rem;
    color: #b0b0b0;
    margin-bottom: 20px;
  }

  .project-link {
    display: inline-block;
    background-color: #94b9ff; /* Azul suave */
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 30px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #6882b4; /* Azul más oscuro */
    }
  }
`;

export default ProjectCard;
