import styled from 'styled-components';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>My fucking projects</h2>
      <p>Here are some of my recent works broder..</p>
    </ProjectsSection>
  );
};

export default Projects;
