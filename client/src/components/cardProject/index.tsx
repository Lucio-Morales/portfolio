import {
  Button,
  ButtonContainer,
  Card,
  ProjectContainer,
  ProjectDescription,
  ProjectImage,
} from './styles';
import fotoDemo from '/foto-de-perfil.jpeg';

const CardProject = () => {
  return (
    <Card>
      <ProjectContainer>
        <ProjectImage src={fotoDemo} alt="Project Image" />

        <ProjectDescription>
          A brief description of the project goes here. It should give a quick
          overview of what the project is about.
        </ProjectDescription>
        <ButtonContainer>
          <button
            className="live"
            href="link-to-deployed-project"
            target="_blank"
          >
            View Project
          </button>
          <button className="github" href="link-to-github-repo" target="_blank">
            GitHub
          </button>
        </ButtonContainer>
      </ProjectContainer>
    </Card>
  );
};

export default CardProject;
