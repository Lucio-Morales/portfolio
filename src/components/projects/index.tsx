import styled from 'styled-components';

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
    font-size: 1.8rem;
    font-weight: 400;
    color: rgb(94, 94, 94);
    padding-top: 50px;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>Some of my projects</h2>
    </ProjectsSection>
  );
};

export default Projects;
