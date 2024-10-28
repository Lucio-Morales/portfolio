import styled from 'styled-components';
import projects from '../../data/projects';
import image_demo from '../../../../../public/image-demo.jpg';

const ProjectsContainer = styled.section`
  padding: 80px 20px 120px 20px;
  background-color: #000000;
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 0;
    height: 4px;
    background-color: tomato;
    display: block;
    margin: 10px auto;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100px;
  }

  @media (max-width: 768px) {
    &::after {
      width: 100px; /* Ancho estático en mobile */
    }

    &:hover::after {
      width: 100px;
    }
  }
`;

const ProjectsGridWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  box-shadow: none;
  padding: 18px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    color: white;
    display: inline-block;
    width: 100%;
    border-bottom: 2px solid #1a1a1a;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 10px 0;
  }

  p {
    font-size: 1.2rem;
    color: #bbb;
    text-align: left;
    margin: 15px 0;
    line-height: 1.6;
    flex-grow: 1;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 15px;

    a {
      margin: 0 5px;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 16px;
      transition: background-color 0.3s ease;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

      &.github-btn {
        background-color: white;
        color: #000000;
        border: 1px solid grey;

        &:hover {
          background-color: #e0e0e0;
          border: 1px solid #e0e0e0;
        }
      }

      &.deploy-btn {
        color: white;
        border: 1px solid white;

        &:hover {
          background-color: #1a1a1a;
        }
      }
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;

  .tech-item {
    background-color: #282828;
    color: #fff;
    margin: 4px;
    padding: 8px 15px; /* Más espacio interno */
    border-radius: 20px; /* Bordes redondeados */
    font-size: 0.9rem;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #444; /* Efecto hover sutil */
    }
  }
`;

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGridWrapper>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <img src={image_demo} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Technologies>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </Technologies>
              <div className="buttons">
                <a href={project.github} className="github-btn">
                  GitHub
                </a>
                <a href={project.deploy} className="deploy-btn">
                  Deploy
                </a>
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsGridWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
