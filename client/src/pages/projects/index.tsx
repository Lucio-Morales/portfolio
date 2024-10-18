import CardProject from '../../components/cardProject';
import { CardsContainer, ProjectsContainer } from './styles';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>My projects</h2>
      <CardsContainer>
        <CardProject />
        <CardProject />
        <CardProject />
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
