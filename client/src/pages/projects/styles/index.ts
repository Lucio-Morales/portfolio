import styled from 'styled-components';

const ProjectsContainer = styled.section`
  background: #e0e0e0;
  min-height: 100vh;
  text-align: center;
  padding-bottom: 120px;

  h2 {
    width: 50%;
    padding: 0.2rem 0.4rem;
    border-radius: 5px;
    color: black;
    margin: 20px auto 0;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export { ProjectsContainer, CardsContainer };
