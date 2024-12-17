import styled from 'styled-components';
import Card from './ProjectCard';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    letter-spacing: -0.1rem;
    // text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 400;
    color: rgb(94, 94, 94);
    padding-top: 50px;
  }
`;

const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  // border: 1px solid grey;
  min-height: 100vh;
  width: 90%;
  padding-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* en pantallas pequeñas, una sola columna */
  }
`;

const Projects = () => {
  const techIcons = [
    'https://via.placeholder.com/30?text=JS', // Reemplaza con las URLs de los íconos reales
    'https://via.placeholder.com/30?text=React',
    'https://via.placeholder.com/30?text=Node',
  ];
  const features = [
    'Responsive Design',
    'Real-time updates',
    'Customizable themes',
    'API Integration',
  ];
  return (
    <ProjectsSection id="projects">
      <h2>Some of my projects</h2>
      <CardsSection>
        <Card
          title="Project 1"
          description="A brief description of project 1. "
          imageUrl="/image-demo.jpg"
          technologies={techIcons}
          features={features}
        />
        <Card
          title="Project 2"
          description="A brief description of project 2."
          imageUrl="/image-demo.jpg"
          technologies={techIcons}
          features={features}
        />
        <Card
          title="Project 3"
          description="A brief description of project 3."
          imageUrl="/image-demo.jpg"
          technologies={techIcons}
          features={features}
        />
        <Card
          title="Project 4"
          description="A brief description of project 4."
          imageUrl="/image-demo.jpg"
          technologies={techIcons}
          features={features}
        />
      </CardsSection>
    </ProjectsSection>
  );
};

export default Projects;
